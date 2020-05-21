<template>
  <b-container align="center" class="mt-3">
    <b-row class="justify-content-center">
      <b-col xl="5" md="9">
        <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
          <b-form @submit.stop.prevent="onSubmit">
            <b-form-group id="password-input-group"
                          class="text-light"
                          label="Новый пароль"
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
  import { required } from 'vuelidate/lib/validators'
  import { UserEntity } from '@/entities/User'
  import ErrorService from '@/services/ErrorService'
  import ChangePasswordUseCase from '@/usecases/authentication/ChangePasswordUseCase'

  export default {
    mixins: [validationMixin],
    props: ['confirmation'],
    name: 'PasswordChange',
    data () {
      return {
        form: {
          password: null
        },
        showOverlay: false
      }
    },
    validations: {
      form: {
        password: {
          required,
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

        this.showOverlay = true
        const data = await this.changePassword()
        this.showOverlay = false

        if (data) {
          await this.$bvModal.msgBoxOk('Ваш пароль успешно изменен', { centered: true })
          await this.$router.push('/')
          return
        }
        await this.$bvModal.msgBoxOk('Произошла ошибка')
      },
      async changePassword () {
        const params = {
          user: new UserEntity(),
          errorService: new ErrorService({
            context: 'resetting password'
          })
        }
        return await new ChangePasswordUseCase(params).execute({
          guid: this.confirmation.guid,
          confirmCode: this.confirmation.confirmCode,
          password: this.form.password
        })
      }
    }
  }
</script>

<style scoped>

</style>
