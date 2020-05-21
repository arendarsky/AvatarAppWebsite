<template>
    <div class="Header">
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand href="/">
              <b-img alt="logo" width="50" height="50" :src="require('@/assets/logo.png')"/>
              XCE FACTOR
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav align="center">
                <b-navbar-nav v-if="presenter.isLogin" class="nav-when-authorized">
                    <b-nav-item to="/">О нас</b-nav-item>
                    <b-nav-item to="/casting">Кастинг</b-nav-item>
                    <b-nav-item to="/rating">Рейтинг</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav v-else class="nav-when-not-authorized">
                  <b-nav-item to="/">О нас</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <LoginSection v-if="!presenter.isLogin" :presenter="presenter"/>
                    <ProfileSection v-else/>
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

export default {
  components: {
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
