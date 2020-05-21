<template>
  <b-container>
    <b-row>
      <b-col>
        <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
          <div v-if="!showOverlay">
            <p class="text-light" v-if="isSuccess">Адрес электронной почты успешно подтвержден!</p>
            <p class="text-danger" v-else>Во время подтверждения адреса электронной почты произошла ОШИБКА!</p>
          </div>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { UserEntity } from '@/entities/User'
  import ErrorService from '@/services/ErrorService'
  import ConfirmEmailUseCase from '@/usecases/authentication/ConfirmEmailUseCase'

  export default {
    props: ['confirmation'],
    name: 'EmailConfirmationComponent',
    data() {
      return {
        showOverlay: true,
        isSuccess: false
      }
    },
    methods: {
      async confirmEmail () {

        const params = {
          user: new UserEntity(),
          errorService: new ErrorService({
            context: 'confirming email'
          })
        }

        this.isSuccess = await new ConfirmEmailUseCase(params).execute(this.confirmation)

        this.showOverlay = false;
      }
    },
    async mounted () {
      await this.confirmEmail()
    }
  }
</script>

<style scoped>

</style>
