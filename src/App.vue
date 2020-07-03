<template>
  <div>
    <Header/>
    <router-view/>
    <b-row class="my-md-5 my-4"><b-col></b-col></b-row>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/modules/header/Header.vue'
import Footer from '@/components/modules/footer/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style>
</style>
