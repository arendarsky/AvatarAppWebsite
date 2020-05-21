<template>
  <b-container class="mt-3">
    <b-row>
      <b-col>
        <b-embed  class="border-bottom border-top border-secondary" autoplay loop type="video" :src="videoSource"  aspect="16by9" controls controlsList="nodownload">
        </b-embed>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Resources from '@/network/api/Resources'

  export default {
    name: 'Video',
    computed: {
      videoSource() {
        return new Resources().GetVideoSource(this.$route.params.id)
      }
    }
  }
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
