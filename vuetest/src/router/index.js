import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import second from '@/components/second'
import three from '@/components/three'
import four from '@/components/four'
import Calendar from '@/components/calendar/calendar'

Vue.use(Router)

export default new Router({
  
  // mode: 'history',
  // base: '/dist/',
  routes: [
    {
      path: '/',
      name: 'First',
      component: first
    },
    {
      path: '/second',
      name: 'Second',
      component: second
    },
    {
      path: '/three',
      name: 'Three',
      component: three
    },
    {
      path: '/four',
      name: 'Four',
      component: four
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '*',
      redirect: '/first'
    }
  ]
})
