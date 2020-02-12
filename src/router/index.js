import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Snake from '../components/games/Snake.vue'
import TicTacToe from '../components/games/TicTacToe.vue'
import BrickBreaker from '../components/games/BrickBreaker.vue'
import RandomShow from '../components/music/RandomShow'

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
  },
  {
    path: '/random',
    name: 'random',
    component: RandomShow
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
