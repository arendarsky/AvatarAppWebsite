<template>
  <b-container align="center">
    <b-row class="m-2" align-h="center">
      <b-col cols="8"  md="4">
      <p v-if="xs" class="common-text text-truncate">#{{rankingPlace}} {{ratingItem.name}}</p>
        <h5 v-else class="common-text text-truncate">#{{rankingPlace}} {{ratingItem.name}}</h5>
    </b-col>
      <b-col cols="4" md="4">
        <p v-if="xs" class="common-text">{{ratingItem.likesNumber}}
          <b-icon-heart variant="info"></b-icon-heart>
        </p>
        <h5 v-else class="common-text">{{ratingItem.likesNumber}}
          <b-icon-heart variant="info"></b-icon-heart>
        </h5>
      </b-col>
    </b-row>
    <b-row>
      <VideoCard :video-source="videoSource"/>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Resources from '@/network/api/Resources';
  import VideoCard from '@/components/modules/VideoCard.vue';
  import {screenSize} from '@/mixins/screenSize.js';

  export default Vue.extend({
    name: 'RatingCard',
    mixins:[screenSize],
    components: {VideoCard},
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

</style>
