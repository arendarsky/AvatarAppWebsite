<template>
  <b-container class="mt-3" align="center">
    <b-row>
      <b-col>
        <div v-if="correctQuery">
          <PasswordChangeComponent :confirmation="confirmation"/>
        </div>
        <div v-else>
          <p class="text-light">Здесь ничего нет</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import PasswordChangeComponent from '@/components/modules/authentication/PasswordChange.vue'

  export default {
    name: 'EmailConfirmation',
    components: {
      PasswordChangeComponent
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
