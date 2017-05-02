<template>
  <div class="container">
    <ol class="breadcrumb">
      <li class="active">{{ title }}</li>
    </ol>

    <h2 class="app-title">{{ pageTopic }}</h2>

    <!--<vue-event-calendar :events="demoEvents"></vue-event-calendar>-->
    <event-calendar :event-datas="eventDatas"></event-calendar>
  </div>
</template>

<script>
import axios from 'axios'
import EventCalendar from './Utils/event-calendar'

export default {
  name: 'home',
  data () {
    return {
      title: 'หน้าหลัก',
      pageTopic: 'ตารางการขอใช้รถประจำเดือน',
      eventDatas: [],
      demoEvents: []
    }
  },
  components: {
    'event-calendar': EventCalendar
  },
  created () {
    this.getEventDatas()
  },
  methods: {
    getEventDatas () {
      const token = localStorage.getItem('token')
      axios.get('http://localhost/laravel-pos/public/api/reservations?token=' + token, {

      })
      .then(
        (response) => {
          if (response.data) {
            response.data.forEach(e => {
              this.eventDatas.push({
                id: e.reserve_id,
                title: e.activity,
                start: e.from_date,
                end: e.to_date,
                url: 'http://localhost:8080/#/reservation/' + e.reserve_id,
                color: 'red'
              })
            })
          }
        }
      )
      .catch(
        (error) => console.log(error)
      )
    }
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */

</style>
