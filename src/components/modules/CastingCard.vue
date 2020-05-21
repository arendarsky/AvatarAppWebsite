<template>
  <b-container fluid>
    <b-row class="justify-content-center p-3">
      <b-col align-self="center" cols="auto">
        <b-avatar :src="avatarSource" variant="info" size="lg"></b-avatar>
      </b-col>
      <b-col align-self="center" cols="auto">
        <b-card-text class="text-light">{{castingItem.name}}</b-card-text>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-embed  class="border-bottom border-top border-secondary" autoplay loop type="video" :src="videoSource"  aspect="16by9" controls controlsList="nodownload">
        </b-embed>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import Resources from '@/network/api/Resources';
  import Vue from 'vue'

  export default Vue.extend({
    name: 'CastingCard',
    props: {
      castingItem: {
        type: Object,
        required: true
      }
    },
    computed: {
      videoSource() {
        return new Resources().GetVideoSource(this.castingItem.video.name)
      },
      avatarSource(){
        return new Resources().GetImageSource(this.castingItem.profilePhoto)
      }
    }
  })
</script>

<style scoped>
  video:focus{
    outline: none !important;
  }
  video{
    border-radius: 20px;
    overflow: hidden;
  }
</style>
