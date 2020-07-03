<template>
    <div class="Header">
        <b-navbar toggleable="lg" type="dark" variant="dark">

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav align="center">
                <b-navbar-nav class="common-text mx-auto">
                  <b-nav-item to="/">О нас</b-nav-item>
                  <b-nav-item to="/casting">Кастинг</b-nav-item>
                  <b-nav-item to="/rating">Рейтинг</b-nav-item>
                  <LoginSection v-if="!presenter.isLogin" :presenter="presenter"/>
                  <ProfileSection v-else/>
                  <b-nav-text><ContactLinks/></b-nav-text>
                </b-navbar-nav>
              <b-navbar-nav>

              </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import LoginSection from './LoginSection.vue'
import ProfileSection from '@/components/modules/header/ProfileSection'
import UserTokenRepository from '@/repositories/UserTokenRepository'
import presenter from './presenter'
import ContactLinks from '@/components/modules/home/ContactLinks'

export default {
  components: {
    ContactLinks,
    ProfileSection,
    LoginSection
  },
  computed:{
    presenter(){
      const params = {
        repository: new UserTokenRepository()
      }
      return new presenter(params)
    }
  }
}
</script>
