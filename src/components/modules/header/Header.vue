<template>
    <div class="Header">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">XCE FACTOR</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">О нас</b-nav-item>
                    <b-nav-item to="/casting">Кастинг</b-nav-item>
                    <b-nav-item to="/rating">Рейтинг</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <LoginSection v-if="!isLogin" />
                    <ProfileSection v-else/>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import LoginSection from './LoginSection.vue'
import ProfileSection from '@/components/modules/header/ProfileSection'
import store from '@/store'

export default {
  components: {
    ProfileSection,
    LoginSection
  },
  computed:{
    isLogin(){
      return store.state.user.userToken
    }
  }
}
</script>
