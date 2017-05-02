import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import VehicleList from '@/components/Vehicles/vehicle-list'
import DriverList from '@/components/Drivers/driver-list'
import ReserveList from '@/components/Reservations/reserve-list'
import ReserveDetail from '@/components/Reservations/reserve-detail'
import ReserveForm from '@/components/Reservations/reserve-form'
import ReserveCancel from '@/components/Reservations/reserve-cancel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reservations',
      name: 'ReserveList',
      component: ReserveList
    },
    {
      path: '/reservation/:id',
      name: 'ReserveDetail',
      component: ReserveDetail
    },
    {
      path: '/reservation/:id/edit',
      name: 'ReserveForm',
      component: ReserveForm
    },
    {
      path: '/reserve-cancel',
      name: 'ReserveCancel',
      component: ReserveCancel
    },
    {
      path: '/reservation',
      name: 'ReserveNew',
      component: ReserveForm
    },
    {
      path: '/vehicles',
      name: 'VehicleList',
      component: VehicleList
    },
    {
      path: '/drivers',
      name: 'DriverList',
      component: DriverList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
