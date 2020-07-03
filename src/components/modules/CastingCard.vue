<template>
  <b-container align="center">
    <b-row class="my-1"><b-col></b-col></b-row>
    <b-row>
      <b-col>
        <h5 v-if="xs" class="common-text">ВЫБЕРИ ЛУЧШЕГО ИЗ ЛУЧШИХ</h5>
        <h1 v-else class="common-text">ВЫБЕРИ ЛУЧШЕГО ИЗ ЛУЧШИХ</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center p-3">
      <b-col align-self="center" cols="auto">
        <b-avatar :src="avatarSource" variant="info" size="lg"></b-avatar>
      </b-col>
      <b-col align-self="center" cols="auto">
        <b-card-text class="text-light">{{castingItem.name}}</b-card-text>
      </b-col>
    </b-row>
    <b-row>
      <VideoCard :video-source="videoSource" :autoplay="true"/>
    </b-row>
    <b-row>
      <b-col class="mt-3">
        <h3 class="head-text">Хочешь увидеть в шоу?</h3>
      </b-col>
    </b-row>
    <b-row class="mt-4 mx-auto" align-h="center">
      <b-col md="3" cols="6">
        <b-link target="_blank" @click="crossClick">
            <b-icon-x scale="5" variant="info"/>
        </b-link>
      </b-col>
      <b-col md="3" cols="6">
        <b-link target="_blank" @click="heartClick">
            <b-icon-heart scale="3" variant="info"/>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import Resources from '@/network/api/Resources';
  import Vue from 'vue'
  import VideoCard from '@/components/modules/VideoCard.vue';
  import {screenSize} from '@/mixins/screenSize.js';

  export default Vue.extend({
    name: 'CastingCard',
    mixins:[screenSize],
    components: {VideoCard},
    props: {
      castingItem: {
        type: Object,
        required: true
      },
      heartClick:{
        type: Function,
        required: true
      },
      crossClick:{
        type: Function,
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
</style>
