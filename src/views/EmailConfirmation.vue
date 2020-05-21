<template>
  <b-container class="mt-3" align="center">
    <b-row>
      <b-col>
        <div v-if="correctQuery">
          <EmailConfirmationComponent :confirmation="confirmation"/>
        </div>
        <div v-else>
          <p class="text-light">Здесь ничего нет</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import EmailConfirmationComponent from '@/components/modules/authentication/EmailConfirmation.vue'

  export default {
    name: 'EmailConfirmation',
    components: {
      EmailConfirmationComponent
    },
    computed: {
      correctQuery () {
        return this.$route.query.guid && this.$route.query.confirmCode
      },
      confirmation() {
        if (this.correctQuery){
          return {guid: this.$route.query.guid, confirmCode: this.$route.query.confirmCode}
        }
      }
    }
  }
</script>

<style scoped>

</style>
