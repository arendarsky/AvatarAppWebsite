<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
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
