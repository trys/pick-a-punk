import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Brews from './views/Brews.vue'
import Brew from './views/Brew.vue'
import Random from './views/Random.vue'
import Picks from './views/Picks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/brews',
      name: 'brews',
      component: Brews
    },
    {
      path: '/brews/:id',
      name: 'brew',
      component: Brew,
      props: true
    },
    {
      path: '/random',
      name: 'random',
      component: Random
    },
    {
      path: '/picks',
      name: 'picks',
      component: Picks
    }
  ]
})
