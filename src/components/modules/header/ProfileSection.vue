<template>
  <b-nav-item-dropdown text="Аккаунт" right>
    <b-dropdown-item to="/settings">Настройки</b-dropdown-item>
    <b-dropdown-item v-on:click="logout()">Выйти</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
  import ErrorService from '@/services/ErrorService'
  import { UserEntity } from '@/entities/User'
  import LogoutUseCase from '@/usecases/LogoutUseCase'

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
