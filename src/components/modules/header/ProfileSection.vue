<template>
  <b-nav-item-dropdown menu-class="bg-secondary rounded" text="Аккаунт" right>
    <b-dropdown-item align="center"  variant="light" to="/settings">Настройки</b-dropdown-item>
    <b-dropdown-item align="center"  variant="danger" v-on:click="logout()">Выйти</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
  import ErrorService from '@/services/ErrorService'
  import { UserEntity } from '@/entities/User'
  import LogoutUseCase from '@/usecases/authentication/LogoutUseCase'

  export default {
    name: 'ProfileSection',
    methods:{
      async logout(){
        const params = {
          errorService: new ErrorService({ context: 'login' }),
          user: new UserEntity()
        }
        await new LogoutUseCase(params).execute(this.user)
      }
    }
  }
</script>

<style scoped>

</style>
