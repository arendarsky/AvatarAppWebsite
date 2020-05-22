<template>
  <v-app>
    <v-app-bar app absolute>
      <Header />
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
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
