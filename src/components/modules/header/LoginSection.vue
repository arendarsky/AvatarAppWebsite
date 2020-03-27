<template>
    <div>
        <b-button v-b-modal.loginmodal>Войти</b-button>

        <b-modal id="loginmodal"
                 title="Вход"
                 ref="modal"
                 @show="resetModal"
                 @hidden="resetModal"
                 @ok="handleOk">
          <b-alert v-model="showAlert" variant="danger" dismissible>
            Неверный логин или пароль!
          </b-alert>
            <b-form-group label="Введите данные пользователя"
                          label-for="name-input">
                <b-form-input ref="emailInput"
                              :state="emailState"
                              type="text"
                              placeholder="Почта"
                              v-model="user.email"
                              required></b-form-input>
                <b-form-input ref="passwordInput"
                              :state="passwordState"
                              type="password"
                              placeholder="Пароль"
                              v-model="user.password"
                              required></b-form-input>
            </b-form-group>
        </b-modal>
    </div>
</template>

<script>
import LoginUseCase from '@/usecases/LoginUseCase'
import ErrorService from '@/services/ErrorService'
import store from '@/store'
import { UserEntity } from '@/entities/User'

export default {
  data () {
    return {
      name: '',
      emailState: null,
      passwordState: null,
      submittedNames: [],
      showAlert: false,
      user: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    invalid () {
      return !!store.state.user.invalid
    }
  },
  methods: {
    checkFormValidity () {
      this.emailState = this.$refs.emailInput.checkValidity()
      this.passwordState = this.$refs.passwordInput.checkValidity()
      return this.emailState && this.passwordState
    },
    resetModal () {
      this.name = ''
      this.nameState = null
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    async handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }

      await this.authorize()

      if (this.invalid){
        this.showAlert = true;
        return
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('loginmodal')
      })
    },
    async authorize () {
      const params = {
        errorService: new ErrorService({ context: 'login' }),
        user: new UserEntity()
      }
      await new LoginUseCase(params).execute(this.user)
    }
  }
}
</script>
