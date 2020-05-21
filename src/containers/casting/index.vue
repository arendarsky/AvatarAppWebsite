<template>
  <b-container fluid align="center">
    <b-row>
        <b-col align-self="center" order="2" order-md="1" class="p-2">
          <b-button :disabled="!presenter.item"  pill size="lg" @click="nextItem(false)" variant="outline-info">
            <b-icon-heart class="align-middle" variant="info"></b-icon-heart>
          </b-button>
        </b-col>
        <b-col cols="12" md="9" xl="8" order="1" order-md="2">
          <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
            <CastingCard v-if="presenter.item" :casting-item="presenter.item"/>
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
            <b-icon-heart-fill class="align-middle" variant="info"></b-icon-heart-fill>
          </b-button>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import CastingRepository from '../../repositories/CastingRepository'
  import presenter from "./presenter";
  import LoadContainerUseCase, { ILoadContainerUseCase } from './LoadContainerUseCase'
  import NextVideoUseCase from './NextVideoUseCase'
  import CastingEntity from '../../entities/Casting'
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
          castingRepository: new CastingRepository()
        }
        return presenter(params)
      }
    },
    methods: {
      async nextItem(isLike){
        const useCase = new NextVideoUseCase({
          casting: new CastingEntity(),
          errorService: new ErrorService({
            context: "Switching to next video"
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
          castingRepository: new CastingRepository(),
          errorService: new ErrorService({
            context: "mounting casting container"
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
