import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Snake from '../components/Snake.vue'
import TicTacToe from '../components/TicTacToe.vue'
import BrickBreaker from '../components/BrickBreaker.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/games',
    name: 'games',
    component: Games,
    children: [
      {
        path: 'snake',
        components: {
          gameView: Snake
        }
      },
      {
        path: 'tictactoe',
        components: {
          gameView: TicTacToe
        }
      },
      {
        path: 'brick',
        components: {
          gameView: BrickBreaker
        }
      }
    ]
  }
]

 // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
