<template>
  <b-container align="center" class="px-lg-5 px-xl-0">
    <b-row>
      <b-col>
        <Brand/>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="p-3">
        <b-img fluid alt="Arrow down" src="@/assets/arrowdown.png"/>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <Description/>
      </b-col>
    </b-row>
    <b-row class="my-md-5 my-3"><b-col></b-col></b-row>
    <b-row>
      <b-col>
        <Partners/>
      </b-col>
    </b-row>
    <b-row class="my-md-5 my-4"><b-col></b-col></b-row>
    <b-row class="mt-md-5 mt-3">
      <b-col class="pl-0">
        <SponsorshipOffer/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

import Brand from '@/components/modules/home/Brand'
import Description from '@/components/modules/home/Description'
import SponsorshipOffer from '@/components/modules/home/SponsorshipOffer'
import Partners from '@/components/modules/home/Partners'
export default {
  name: 'Home',
  components: { Partners, SponsorshipOffer, Description, Brand }
}
</script>

<style>

</style>
