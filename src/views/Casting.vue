<template>
  <CastingCard :casting-item="activeCastingItem"></CastingCard>
</template>

<script>
  import CastingCard from "@/components/modules/casting/CastingCard"
  import store from "@/store"
  import GetVideoQueueUseCase from '@/usecases/casting/GetVideoQueueUseCase'
  import ErrorService from '@/services/ErrorService'
  import CastingEntity from '@/entities/Casting'

  export default {
    name: 'Casting',
    components:{
      CastingCard
    },
    data(){
      return{
        activeCastingItem: null,
        castingUseCaseParams: {
          errorService: new ErrorService({ context: 'casting' }),
          casting: new CastingEntity()
        }
      }
    },
    methods:{
      async GetVideoQueue(){
        await new GetVideoQueueUseCase(this.castingUseCaseParams).execute();
      }
    },
    mounted: async function (){
      if (store.state.casting.nothingToShow){
        return;
      }
      if (store.state.casting.activeItem != null){
        return;
      }
      await this.GetVideoQueue();
      this.activeCastingItem = store.state.casting.activeItem;
    }
  }
</script>

<style scoped>

</style>
