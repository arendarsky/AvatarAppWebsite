<template>
  <b-container fluid align="center">
    <b-row>
        <b-col align-self="center" order="2" order-md="1" class="p-2">
          <b-button :disabled="!presenter.item"  pill size="lg" @click="nextItem(false)" variant="danger">
            <b-icon-person-dash-fill class="align-middle" variant="info"></b-icon-person-dash-fill>
          </b-button>
        </b-col>
        <b-col cols="12" md="9" xl="8" order="1" order-md="2">
          <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
            <div v-if="presenter.item">
              <CastingCard :casting-item="presenter.item"/>
              <b-card-text class="text-light">{{presenter.item.email}}</b-card-text>
            </div>
            <b-card v-else body-bg-variant="dark" border-variant="dark" text-variant="light">
              <b-card-text>
                Упс! Видео закончились
              </b-card-text>
              <b-button v-show="!showOverlay" pill size="lg" @click="onLoad()" variant="outline-info">
                <b-icon-arrow-clockwise variant="info"></b-icon-arrow-clockwise>
              </b-button>
            </b-card>
          </b-overlay>
        </b-col>
        <b-col align-self="center" order="3" order-md="3" class="p-2">
          <b-button :disabled="!presenter.item" @click="nextItem(true)" pill size="lg" variant="outline-success">
            <b-icon-person-check-fill class="align-middle" variant="info"></b-icon-person-check-fill>
          </b-button>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import ModerationRepository from '../../repositories/ModerationRepository'
  import presenter from "./presenter";
  import LoadContainerUseCase from './LoadContainerUseCase'
  import NextVideoUseCase from './NextVideoUseCase'
  import ModerationEntity from '../../entities/Moderation'
  import ErrorService from '../../services/ErrorService'
  import CastingCard from '@/components/modules/CastingCard.vue'

  export default {
    name: 'index',
    components:{
      CastingCard
    },
    data(){
      return{
        showOverlay: false
      }
    },
    computed:{
      presenter() {
        const params = {
          moderationRepository: new ModerationRepository()
        }
        return presenter(params)
      }
    },
    methods: {
      async nextItem(isLike){
        const useCase = new NextVideoUseCase({
          moderation: new ModerationEntity(),
          errorService: new ErrorService({
            context: "switching to next video"
          })
        });

        await useCase.execute({
          name: this.presenter.item.video.name,
          isLike: isLike
        });
      },
      async onLoad(){
        this.showOverlay = true;
        const params = {
          moderationRepository: new ModerationRepository(),
          errorService: new ErrorService({
            context: "mounting moderation container"
          }),
          number: 30
        }

        await new LoadContainerUseCase(params).execute();
        this.showOverlay = false;
      }
    },
    async mounted(){
      await this.onLoad();
    }
  }
</script>

<style scoped>
</style>
