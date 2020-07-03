<template>
  <b-container align="center">
    <b-row class="my-1"><b-col></b-col></b-row>
    <b-row>
      <b-col>
        <h1 class="common-text">ВЫБЕРИ ЛУЧШЕГО ИЗ ЛУЧШИХ</h1>
      </b-col>
    </b-row>
    <b-row class="mt-3 mb-1"><b-col></b-col></b-row>
    <b-row>
      <VideoCard :video-source="videoSource"/>
    </b-row>
    <b-row>
      <b-col class="mt-3">
        <h4 class="head-text">Хочешь увидеть в шоу?</h4>
      </b-col>
    </b-row>
    <b-row class="mt-4 mx-auto" align-h="center">
      <b-col md="3" cols="6">
        <b-link target="_blank" @click="scrollToBottom">
          <b-icon-x scale="5" variant="info"/>
        </b-link>
      </b-col>
      <b-col md="3" cols="6">
        <b-link target="_blank" @click="scrollToBottom">
          <b-icon-heart scale="3" variant="info"/>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Resources from '@/network/api/Resources'
  import VideoCard from '@/components/modules/VideoCard.vue'

  export default {
    components: { VideoCard },
    name: 'Video',
    computed: {
      videoSource() {
        return new Resources().GetVideoSource(this.$route.params.id)
      }
    },
    methods: {
      scrollToBottom(){
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
      }
    }
  }
</script>

<style scoped>

  .decision-button{

    border-radius: 50%;
  }



</style>
