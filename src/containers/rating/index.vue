<template>
  <b-container align="center">
    <b-row class="my-2"><b-col></b-col></b-row>
    <b-row>
      <b-col>
        <b-link href="#" class="test" @click="onLoad()"><h1 class="common-text">РЕЙТИНГ XCE FACTOR 2020</h1></b-link>
      </b-col>
    </b-row>
    <b-row class="my-2"><b-col></b-col></b-row>
    <b-row v-for="(ratingItem, index) in presenter.items">
      <b-col class="mb-5">
        <b-overlay :show="showOverlay" rounded="sm" variant="transparent">
          <RatingCard :rating-item="ratingItem" :ranking-place="index + 1"/>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ErrorService from '../../services/ErrorService';
  import LoadContainerUseCase, {ILoadContainerUseCase} from './LoadContainerUseCase';
  import RatingRepository from '../../repositories/RatingRepository';
  import Presenter, {IPresenter, IPresenterState} from '@/containers/rating/presenter';
  import RatingCard from '@/components/modules/RatingCard.vue';

  export default Vue.extend({
    name: 'index.vue',
    components:{
      RatingCard
    },
    data(){
      return{
          showOverlay: false
      }
    },
    computed:{
      presenter(): IPresenterState {
        const params: IPresenter = {
          ratingRepository: new RatingRepository()
        };

        return Presenter(params);
      }
    },
    methods: {
      async onLoad() {
        this.showOverlay = true;
        const params: ILoadContainerUseCase = {
          ratingRepository: new RatingRepository(),
          errorService: new ErrorService({
            context: "mounting rating container"
          }),
          number: 50
        };

        await new LoadContainerUseCase(params).execute();
        this.showOverlay = false;
      },
    },
    async mounted(){
      await this.onLoad();
    }
  })
</script>

<style scoped>
  a:hover{
    text-decoration: none;
  }
</style>
