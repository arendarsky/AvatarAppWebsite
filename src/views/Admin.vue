<template>
  <b-container>
    <b-row>
      <b-col>
        <b-button  @click="setSemifinalist">Установить полуфиналиста</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {container} from "@/dependency-config"

  const setSemifinalistService = container.get('SetSemifinalistService')

  export default {
    name: "Admin",
    methods: {
      async setSemifinalist() {
        await setSemifinalistService.handle()
      }
    }
  }
</script>

<style scoped>

</style>
