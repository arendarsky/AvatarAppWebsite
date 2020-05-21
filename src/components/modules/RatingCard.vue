<template>
  <b-container fluid>
    <b-row class="justify-content-center m-2">
      <b-col cols="auto">
        <b-avatar :src="avatarSource" variant="info" size="lg"></b-avatar>
      </b-col>
      <b-col cols="4" md="auto" align-self="center">
        <b-card-text class="text-light text-wrap text-truncate">{{ratingItem.name}}</b-card-text>
      </b-col>
      <b-col cols="auto">
        <div>
          <b-avatar variant="info" :text="`${rankingPlace}`"/>
        </div>
        <b-badge pill  variant="success">{{ratingItem.likesNumber}} <b-icon-heart-fill></b-icon-heart-fill></b-badge>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-embed type="video" class="border-bottom border-top border-secondary" :src="videoSource"  aspect="16by9" preload="metadata" controls controlsList="nodownload">
        </b-embed>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Resources from '@/network/api/Resources';

  export default Vue.extend({
    name: 'RatingCard',
    props: {
      ratingItem: {
        type: Object,
        required: true
      },
      rankingPlace: {
        type: Number
      }
    },
    computed: {
      videoSource() {
        return new Resources().GetVideoSource(this.ratingItem.video.name)
      },
      avatarSource(){
        return new Resources().GetImageSource(this.ratingItem.profilePhoto)
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
