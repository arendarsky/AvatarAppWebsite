<template>
  <b-container v-if="!presenter.isSuccess" class="mt-3">
    <b-row class="justify-content-center">
      <b-col xl="5" md="9" align="left">
        <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
          <b-alert v-model="showAlert" variant="danger" dismissible>
            Пользователь с таким электронным адресом уже существует!
          </b-alert>
          <b-form @submit.stop.prevent="onSubmit">
            <b-form-group class="text-light"
                          id="name-input-group"
                          label="Имя"
                          label-for="name-input">
              <b-form-input id="name-input"
                            :state="validateState('name')"
                            type="text"
                            placeholder="Введите имя"
                            v-model="$v.form.name.$model"></b-form-input>
            </b-form-group>
            <b-form-group class="text-light"
                          id="email-input-group"
                          label="Адрес электронной почты"
                          label-for="email-input">
              <b-form-input id="email-input"
                            :state="validateState('email')"
                            type="email"
                            placeholder="Введите почту"
                            v-model="$v.form.email.$model"
                            aria-describedby="input-email-feedback"></b-form-input>
              <b-form-invalid-feedback id="input-email-feedback">
                Адрес электронной почты некорректный
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group class="text-light"
                          id="password-input-group"
                          label="Пароль"
                          label-for="password-input">
              <b-form-input id="password-input"
                            :state="validateState('password')"
                            type="password"
                            placeholder="Введите пароль"
                            v-model="$v.form.password.$model"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="info">Подтвердить</b-button>
          </b-form>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import Presenter from './presenter'
  import ErrorService from '@/services/ErrorService'
  import { UserEntity } from '@/entities/User'
  import RegisterUseCase from '@/usecases/authentication/RegisterUseCase'
  import LoginUseCase from '@/usecases/authentication/LoginUseCase'

  export default {
    mixins: [validationMixin],
    name: 'RegisterForm',
    data () {
      return {
        form: {
          name: null,
          email: null,
          password: null
        },
        showAlert: false,
        showOverlay: false
      }
    },
    validations: {
      form: {
        name: {
          required,
          maxLength: maxLength(30)
        },
        email: {
          required,
          email
        },
        password: {
          required
        }
      }
    },
    computed: {
      presenter () {
        return new Presenter()
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

        if (this.presenter.isSuccess) {
          await this.login()
          this.$router.push('/')
          return
        }
        this.showAlert = true
      },
      async register () {
        this.showOverlay = true
        const params = {
          errorService: new ErrorService({ context: 'registration' }),
          user: new UserEntity()
        }
        await new RegisterUseCase(params).execute(this.form)
        this.showOverlay = false
      },
      async login () {
        const params = {
          errorService: new ErrorService({ context: 'login' }),
          user: new UserEntity()
        }
        await new LoginUseCase(params).execute({
          email: this.form.email,
          password: this.form.password
        })
      }
    }
  }
</script>

<style scoped>

</style>
