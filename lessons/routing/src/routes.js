import User from './components/user/User.vue';
import Another from './components/user/Another.vue';
import Home from './components/Home.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/user/:id', component: Another },
  { path: '/user', component: User }
];
