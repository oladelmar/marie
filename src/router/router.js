import Vue from 'vue';
import Router from 'vue-router';
import GeneralLayout from '@/components/layout/GeneralLayout';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: GeneralLayout,
      props: true,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/About.vue'),
          children: [
            {
              path: '/about/education',
              name: 'Education',
              component: () => import('@/views/about/Education.vue')
            },
            {
              path: '/about/skills',
              name: 'Skills',
              component: () => import('@/views/about/Skills.vue')
            },
            {
              path: '/about/languages',
              name: 'Languages',
              component: () => import('@/views/about/Languages.vue')
            }
          ]
        },
        {
          path: '/projects',
          name: 'Projects',
          component: Projects
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('@/views/Contact.vue')
        }
      ]
    },
    {
      path: '/umnitsa',
      name: 'Umnitsa'
    },
    {
      path: '/africanspirit',
      name: 'AfricanSpirit'
    }
  ]
});
