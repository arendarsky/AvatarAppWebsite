<template>
  <b-container fluid v-if="presenter.item" align="center">
    <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
      <b-row class="justify-content-center p-3">
        <b-col align-self="center" cols="auto" class="p-1">
          <b-avatar :src="avatarSource" variant="info" size="lg"></b-avatar>
          <div>
            <b-badge pill  variant="success">{{presenter.item.likesNumber}} <b-icon-heart-fill></b-icon-heart-fill></b-badge>
          </div>
        </b-col>
        <b-col align-self="center" cols="auto">
          <b-form-input ref="nameInput" :state="nameState" v-model="presenter.item.name" placeholder="Имя" required
                        class="bg-secondary border-dark text-light"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col align-self="center" cols="12" md="7" xl="4">
          <b-form-textarea class="bg-secondary border-dark text-light"
                           v-model="presenter.item.description"
                           placeholder="Описание профиля"
                           rows="6"
                           no-resize
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="justify-content-center border-bottom border-secondary">
        <b-col class="p-3">
          <b-button @click="save()" variant="info">Cохранить</b-button>
        </b-col>
      </b-row>
      <b-row class="justify-content-center p-3">
        <b-col class="m-1" xl="4" md="5" v-for="video in this.presenter.item.videos">
          <PrivateVideoCard :video="video" :send-video-to-casting="sendVideoToCasting" :remove-video-parent="removeVideo"/>
        </b-col>
      </b-row>
    </b-overlay>
  </b-container>
</template>

<script>
  import Vue from 'vue';
  import Presenter, {IPresenter, IPresenterState} from '@/containers/privateprofile/presenter';
  import ErrorService from '@/services/ErrorService';
  import LoadContainerUseCase, {ILoadContainerUseCase} from '@/containers/privateprofile/LoadContainerUseCase';
  import PrivateProfileRepository from '@/repositories/PrivateProfileRepository';
  import Resources from '@/network/api/Resources';
  import SaveProfileUseCase, {ISaveProfileUseCase} from '@/containers/privateprofile/SaveProfileUseCase';
  import {PrivateProfileEntity} from '@/entities/PrivateProfile';
  import PrivateVideoCard from '@/components/modules/PrivateVideoCard.vue';
  import SendVideoToCastingUseCase from '@/containers/privateprofile/SendVideoToCastingUseCase'
  import RemoveVideoUseCase from '@/containers/privateprofile/RemoveVideoUseCase'

  export default{
    name: 'index.vue',
    components: {
      PrivateVideoCard
    },
    data() {
      return {
        showOverlay: false,
        nameState: null
      };
    },
    computed: {
      presenter() {
        const params = {
          repository: new PrivateProfileRepository()
        };

        return Presenter(params);
      },
      avatarSource() {
        return new Resources().GetImageSource(this.presenter.item.profilePhoto);
      }
    },
    methods: {
      async onLoad() {
        this.showOverlay = true;
        const params = {
          repository: new PrivateProfileRepository(),
          errorService: new ErrorService({
            context: 'mounting profile container'
          })
        };

        await new LoadContainerUseCase(params).execute();
        this.showOverlay = false;
      },
      async save() {
        if (this.presenter.item == null) {
          return;
        }
        if (!this.checkValidity()) {
          return;
        }

        this.showOverlay = true;
        const params = {
          errorService: new ErrorService({
            context: 'saving profile'
          }),
          privateProfileEntity: new PrivateProfileEntity()
        };

        await new SaveProfileUseCase(params).execute({
          description: this.presenter.item.description,
          name: this.presenter.item.name
        });
        await this.onLoad();
      },
      checkValidity() {
        this.nameState = this.$refs.nameInput.checkValidity();

        return this.nameState;
      },
      async sendVideoToCasting(name){
        this.showOverlay = true;
        const params = {
          errorService: new ErrorService({
            context: 'sending video to casting'
          }),
          privateProfileEntity: new PrivateProfileEntity()
        };

        await new SendVideoToCastingUseCase(params).execute(name);
        await this.onLoad();
      },
      async removeVideo(name){
        this.showOverlay = true;
        const params = {
          errorService: new ErrorService({
            context: 'removing video'
          }),
          privateProfileEntity: new PrivateProfileEntity()
        };

        await new RemoveVideoUseCase(params).execute(name);
        await this.onLoad();
      }
    },
    async mounted() {
      await this.onLoad();
    }
  }
</script>

<style scoped>

</style>
