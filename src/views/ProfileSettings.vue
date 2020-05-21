<template>
  <PrivateProfileContainer/>
</template>

<script lang="ts">
  import Vue from 'vue';
  import PrivateProfileContainer from '@/containers/privateprofile/index.vue'

  export default Vue.extend({
    name: 'ProfileSettings',
    components:{
      PrivateProfileContainer
    }
  })
</script>

<style scoped>

</style>
