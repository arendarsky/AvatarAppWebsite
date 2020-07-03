<template>
  <b-container fluid align="center">
    <b-row>
        <b-col>
            <CastingCard v-if="presenter.item" :casting-item="presenter.item" :cross-click="crossClick" :heart-click="heartClick"/>
            <b-card v-else body-bg-variant="dark" border-variant="dark" text-variant="light">
              <b-card-text>
                Упс! Видео закончились
              </b-card-text>
              <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
              <b-link v-show="!showOverlay" @click="onLoad()" variant="outline-info">
                <b-icon-arrow-clockwise scale="2" variant="info"></b-icon-arrow-clockwise>
              </b-link>
              </b-overlay>
            </b-card>
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
      async heartClick(){
        await this.nextItem(true)
      },
      async crossClick(){
        await this.nextItem(false)
      },
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
