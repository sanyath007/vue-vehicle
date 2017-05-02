<template>
  <div id='calendar'></div>
</template>

<script>
import '../../../node_modules/fullcalendar/dist/fullcalendar.min.js'

var $ = window.jQuery = require('jquery')

export default {
  name: 'event-calendar',
  props: [ 'eventDatas' ],
  data () {
    return {
      msg: 'Event Calendar',
      eventOptions: {}
    }
  },
  created () {
    console.log('on created...')
    console.log(this.eventDatas)
    this.eventOptions = {
      locale: 'th',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: '2017-04-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: this.eventDatas,
      eventClick: function (event) {
        console.log(event)
      },
      dayClick: function (date) {
        console.log(date)
      }
    }
  },
  mounted () {
    console.log('on mounted...')
    console.log(this.eventOptions)
    $(this.$el).fullCalendar(this.eventOptions)
  },
  updated () {
    console.log('on updated...')
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */
@import '../../../node_modules/fullcalendar/dist/fullcalendar.min.css';

#calendar {
  /*max-width: 900px;*/
  margin: 0 auto;
}
</style>
