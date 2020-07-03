<template>
  <b-container align="center">
    <b-row class="mx-md-auto" align-h="center">
      <b-col align-self="center">
        <b-container class="footerBorder py-2 py-md-3 px-md-4">
          <b-row>
            <b-col>
              <b-container class="footerBorder py-md-4 py-2">
                <b-row>
                  <b-col cols="6" class="p-0">
                    <AppLinks/>
                  </b-col>
                  <b-col cols="6" class="p-0">
                    <ContactLinks with-text="true"/>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  import AppLinks from '@/components/modules/home/AppLinks.vue'
  import ContactLinks from '@/components/modules/home/ContactLinks'

  export default {
    name: 'Footer',
    components: {
      ContactLinks,
      AppLinks
    }
  }
</script>

<style scoped>

</style>
