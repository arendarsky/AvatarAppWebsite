<template>
  <b-container align="center" class="mt-3">
    <b-row class="justify-content-center">
      <b-col xl="5" md="9">
        <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
          <b-form @submit.stop.prevent="onSubmit">
            <b-form-group id="email-input-group"
                          class="text-light"
                          label="Адрес элетронной почты"
                          label-for="email-input">
              <b-form-input id="email-input"
                            :state="validateState('email')"
                            type="email"
                            placeholder="Введите почту"
                            v-model="$v.form.email.$model"
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
  import { required, email } from 'vuelidate/lib/validators'
  import { UserEntity } from '@/entities/User'
  import ErrorService from '@/services/ErrorService'
  import SendEmailConfirmationUseCase from '../../../usecases/authentication/SendEmailConfirmationUseCase'

  export default {
    mixins: [validationMixin],
    name: 'SendEmailConfirmation',
    data () {
      return {
        form: {
          email: null
        },
        showOverlay: false
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        }
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

        await this.sendReset()

        await this.$bvModal.msgBoxOk('Ссылка для подтверждения отправлена на указанную электронную почту', {centered: true})

        await this.$router.push('/')
      },
      async sendReset () {
        this.showOverlay = true
        const params = {
          user: new UserEntity(),
          errorService: new ErrorService({
            context: 'sending email confirmation'
          })
        }
        await new SendEmailConfirmationUseCase(params).execute(this.form.email)
        this.showOverlay = false
      }
    }
  }
</script>

<style scoped>

</style>
