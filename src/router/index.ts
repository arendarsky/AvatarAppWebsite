import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Rating from '@/views/Rating.vue';
import Casting from '@/views/Casting.vue';
import ProfileSettings from '@/views/ProfileSettings.vue';
import Moderation from '@/views/Moderation.vue';
import Register from '@/views/Register.vue';
import EmailConfirmation from '@/views/EmailConfirmation.vue';
import PasswordReset from '@/components/modules/authentication/PasswordReset.vue';
import PasswordChange from '@/views/PasswordChange.vue';
import SendEmailConfirmation from '@/components/modules/authentication/SendEmailConfirmation.vue';
import Video from '@/views/Video.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/casting',
    name: 'Casting',
    component: Casting,
  },
  {
    path: '/rating',
    name: 'Rating',
    component: Rating,
  },
  {
    path: '/settings',
    name: 'ProfileSettings',
    component: ProfileSettings,
  },
  {
    path: '/moderation',
    name: 'Moderation',
    component: Moderation
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/auth/confirmation/send',
    name: 'SendEmailConfirmation',
    component: SendEmailConfirmation,
  },
  {
    path: '/auth/confirm',
    name: 'EmailConfirmation',
    component: EmailConfirmation,
  },
  {
    path: '/auth/password/reset',
    name: 'PasswordReset',
    component: PasswordReset,
  },
  {
    path: '/auth/password/change',
    name: 'PasswordChange',
    component: PasswordChange,
  },
  {
    path: '/video/:id',
    name: 'Video',
    component: Video,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
