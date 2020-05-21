<template>
  <b-container>
    <b-row>
      <b-col>
        <b-embed type="video" class="border-bottom border-top border-secondary" :src="videoSource" preload="metadata"  aspect="16by9" controls controlsList="nodownload">
        </b-embed>
      </b-col>
    </b-row>
    <b-row>
      <b-col/>
      <b-col>
        <b-badge :variant="videoStatus.color" href="#" @click="sendToCasting()">{{videoStatus.text}}</b-badge>
      </b-col>
      <b-col align="left">
        <b-icon-x-circle-fill @click="removeVideo" variant="danger" class="align-middle"></b-icon-x-circle-fill>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Resources from '@/network/api/Resources';

  export default {
    name: 'VideoCard',
    props:['video', 'sendVideoToCasting', 'removeVideoParent'],
    computed: {
      videoSource() {
        return new Resources().GetVideoSource(this.video.name);
      },
      videoStatus(){
        return this.video.isApproved == null
          ? {text: 'На модерации', color: 'warning'}
          : !this.video.isApproved
            ? {text: 'Видео не одобрено', color: 'danger'}
            : this.video.isActive
              ? {text: 'В кастинге', color: 'success'}
              : {text: 'Отправить в кастинг', color: 'info'}
      }
    },
    methods: {
      async sendToCasting(){
        if (!this.video.isApproved || this.video.isActive) return;
        await this.sendVideoToCasting(this.video.name);
      },
      async removeVideo() {
        const data = await this.$bvModal.msgBoxConfirm('Вы уверены, что хотите удалить это видео? Вместе с ним удалятся и все полученные за него лайки.', {
          title: 'Подтвердите действие',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Да',
          cancelTitle: 'Нет',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        });
        if (!data) return;

        await this.removeVideoParent(this.video.name);
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
