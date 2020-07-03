<template>
  <b-container align="center">
    <b-row>
      <b-col align-self="center" cols="6" class="p-0">
        <b-img alt="Vue logo" fluid src="@/assets/mainscreen.png"/>
      </b-col>
      <b-col cols="6" class="p-0" align-self="center">
        <b-container>
          <b-row><b-col class="p-0"><h1 class="head-text display-3">XCE</h1></b-col></b-row>
          <b-row class="mt-md-2"><b-col class="p-0"><h1 class="head-text display-3">FACTOR</h1></b-col></b-row>
          <b-row class="mt-md-2"><b-col class="p-0"><h1 class="head-text display-3">2020</h1></b-col></b-row>
          <b-row class="mt-md-2"><b-col class="p-0"><AppLinks/></b-col></b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import AppLinks from './AppLinks.vue'
  export default {
    name: 'Brand',
    components:{
      AppLinks
    }
  }
</script>

<style scoped>

</style>
