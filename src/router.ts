import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; // Assuming you have a Home page
import About from './pages/About.vue'; // Create the About page
import Tasks from './pages/Tasks.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/tasks',
    name: 'Tâches',
    component: Tasks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;