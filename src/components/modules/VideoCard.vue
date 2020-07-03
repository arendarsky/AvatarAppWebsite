<template>
    <b-container class="px-lg-5 mx-lg-5 px-xl-0 mx-xl-0">
      <b-row class="px-lg-5 mx-lg-5 px-xl-0 mx-xl-0">
        <b-col>
          <b-embed v-if="xs" class="border border-info" loop :autoplay="autoplay" type="video" :src="videoSource"  aspect="1by1" controls controlsList="nodownload">
          </b-embed>
          <b-embed v-else  class="border border-info" loop type="video" :autoplay="autoplay" :src="videoSource"  aspect="16by9" controls controlsList="nodownload">
          </b-embed>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  import {screenSize} from '@/mixins/screenSize.js'

  export default {
    mixins:[screenSize],
    props:['videoSource', 'autoplay'],
    name: 'VideoCard'
  }
</script>

<style scoped>

</style>
