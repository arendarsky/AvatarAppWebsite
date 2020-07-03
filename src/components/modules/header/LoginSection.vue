<template>
  <div>
    <b-nav-item v-b-modal.loginmodal variant="info">Войти</b-nav-item>

    <b-modal id="loginmodal"
             title="Вход"
             ref="modal"
             @show="resetModal"
             @hidden="resetModal"
             @ok="handleOk">
      <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
        <b-alert v-model="showAlert" variant="danger" dismissible>
          {{alertMsg}}
          <br/>
          <b-link to="/auth/confirmation/send" @click="$bvModal.hide('loginmodal')" v-if="alertLink">Не пришло подтверждение?</b-link>
        </b-alert>
        <b-form >
          <b-form-group id="email-input-group"
                        label="Адрес электронной почты"
                        label-for="email-input">
            <b-form-input id="email-input"
                          :state="validateState('email')"
                          type="text"
                          placeholder="Введите почту"
                          v-model="$v.form.email.$model"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="password-input-group"
                        label="Пароль"
                        label-for="password-input">
            <b-form-input id="password-input"
                          :state="validateState('password')"
                          type="password"
                          placeholder="Введите пароль"
                          v-model="$v.form.password.$model"
                          required aria-describedby="input-password-feedback"></b-form-input>
            <b-form-invalid-feedback id="input-password-feedback" force-show>
              <b-link to="/auth/password/reset" @click="$bvModal.hide('loginmodal')">Забыли пароль?</b-link>
            </b-form-invalid-feedback>
          </b-form-group>
        </b-form>
          <b-link to="/register" @click="$bvModal.hide('loginmodal')">Новый пользователь</b-link>
      </b-overlay>
    </b-modal>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import LoginUseCase from '@/usecases/authentication/LoginUseCase'
  import ErrorService from '@/services/ErrorService'
  import { UserEntity } from '@/entities/User'

  export default {
    mixins: [validationMixin],
    props: ['presenter'],
    data () {
      return {
        form: {
          email: null,
          password: null
        },
        showOverlay: false,
        showAlert: false,
      }
    },
    validations: {
      form: {
        email: {
          required
        },
        password: {
          required
        }
      }
    },
    computed: {
      alertMsg () {
        return this.presenter.invalid
          ? 'Неверный логин или пароль!'
          : !this.presenter.isConfirmed
            ? 'Электронный адрес не подтвержден!'
            : ''
      },
      alertLink() {
        return !this.presenter.invalid && !this.presenter.isConfirmed
      }
    },
    methods: {
      validateState (name) {
        const { $dirty, $error } = this.$v.form[name]
        return $dirty ? !$error : null
      },
      async onSubmit () {
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          return
        }

        await this.register()

        if (this.presenter.isSuccess){
          await this.login()
          await this.$router.push("/");
          return
        }
        this.showAlert = true;
      },
      checkFormValidity () {
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          return false
        }
        return true
      },
      resetModal () {
        this.form.email = null
        this.form.password = null
      },
      async handleOk (evt) {
        evt.preventDefault()

        this.showOverlay = true
        await this.handleSubmit()
        this.showOverlay = false
      },
      async handleSubmit () {
        if (!this.checkFormValidity()) {
          return
        }

        await this.authorize()

        if (!this.presenter.isLogin) {
          this.showAlert = true
          return
        }

        this.$nextTick(() => {
          this.$bvModal.hide('loginmodal')
        })
      },
      async authorize () {
        const params = {
          errorService: new ErrorService({ context: 'login' }),
          user: new UserEntity()
        }
        await new LoginUseCase(params).execute(this.form)
      }
    }
  }
</script>
