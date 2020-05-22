<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/modules/header/Header.vue'

export default Vue.extend({
  components: {
    Header
  }
})
</script>

<style>

</style>
