<template>
  <div class="player-container">
    <b-card class="text-center" v-if="castingItem">
      <b-card-header>
        <b-card-title :title="castingItem.name"></b-card-title>
      </b-card-header>
      <b-card-body align="center">
        <video-player  class="video-player-box"
                      ref="videoPlayer"
                      :options="playerOptions"></video-player>
        <b-card-text>
          {{castingItem.description}}
        </b-card-text>
      </b-card-body>

    </b-card>
  </div>
</template>

<script>
  import 'video.js/dist/video-js.css'
  import {videoPlayer} from 'vue-video-player'

  export default {
    name: 'CastingCard',
    components:{
      videoPlayer
    },
    props: ["castingItem"],
    data(){
      return{

      }
    },
    computed: {
      playerOptions () {
        if (this.castingItem == null){
          return;
        }
        return {
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: `https://xce-factor.ru/api/video/${this.castingItem.video.name}`
          }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
