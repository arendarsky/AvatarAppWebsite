<template>
  <b-container align="center">
    <b-row v-if="withText">
      <b-col><p class="common-text p-0">Следи за нами в<br/>соц. сетях</p></b-col>
    </b-row>
    <b-row v-if="withText" class="mx-auto" align-h="center">
      <b-col cols="3" align="right" class="px-1">
        <b-link href="https://vk.com/xcefactor2020" target="_blank">
          <b-img alt="VK" fluid src="@/assets/logos/vk.png"/>
        </b-link>
      </b-col>
      <b-col cols="3" class="px-1">
        <b-link href="https://www.instagram.com/xcefactor" target="_blank">
          <b-img alt="Instagram" fluid src="@/assets/logos/instagram.png"/>
        </b-link>
      </b-col>
      <b-col cols="3" align="left" class="px-1">
        <b-link href="https://twitter.com/xcefactor2020" target="_blank">
          <b-img alt="Twitter" fluid src="@/assets/logos/twitter.png"/>
        </b-link>
      </b-col>
    </b-row>
    <b-row v-else class="mx-auto" align-h="center">
      <b-col cols="3">
        <b-link href="https://vk.com/xcefactor2020" target="_blank">
          <b-img alt="VK" fluid src="@/assets/logos/small/vk.png"/>
        </b-link>
      </b-col>
      <b-col cols="3">
        <b-link href="https://www.instagram.com/xcefactor" target="_blank">
          <b-img alt="Instagram" fluid src="@/assets/logos/small/instagram.png"/>
        </b-link>
      </b-col>
      <b-col cols="3">
        <b-link href="https://twitter.com/xcefactor2020" target="_blank">
          <b-img alt="Twitter" fluid src="@/assets/logos/small/twitter.png"/>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    props: ['withText'],
    name: 'ContactLinks',
    computed:{
      pathToLogos(){
        return this.withText ? '@/assets/logos/' : '@/assets/logos/small/'
      }
    }
  }
</script>

<style scoped>

</style>
