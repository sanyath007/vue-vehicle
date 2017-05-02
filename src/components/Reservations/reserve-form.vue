<template>
  <div class="container">
      <ol class="breadcrumb">
        <li><a href="#">หน้าหลัก</a></li>
        <li class="active">{{ msg }}</li>
      </ol>

    <div class="row">
      <div class="col-md-12">
        <h3 class="app-title">{{ msg }}</h3>
        
        <form>
            <!--ผู้ขอ-->
            <input type="hidden" name="reserve_id" value="">
            <!--วันที่ขอ-->
            <input type="hidden" name="reserve_date" value="">

            <div class="form-group has-feedback">
                <label for="กิจกรรม">กิจกรรม</label>
                <input type="text" name="" value="" class="form-control css-require">
                <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="วันที่ขอ">สถานที่</label>
                <input type="text" name="" value="" class="form-control css-require">
                <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="ออกเดินทางวันที่">ออกเดินทางวันที่</label>
                <!--<div class="input-group date" data-provide="datepicker">
                    <input type="text" id="fromdate" name="fromdate" class="form-control css-require">
                    <div class="input-group-addon">
                        <span class="glyphicon glyphicon-th"></span>
                    </div>
                </div>-->
                <date-picker :startDate="'28/04/2017'" :ctrlName="'fromDate'"></date-picker>
                <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="กลับวันที่">กลับวันที่</label>
                <!--<div class="input-group date" data-provide="datepicker">
                    <input type="text" id="todate" name="todate" class="form-control">
                    <div class="input-group-addon">
                        <span class="glyphicon glyphicon-th"></span>
                    </div>
                </div>
                <span class="glyphicon form-control-feedback" aria-hidden="true"></span>-->

                <!--<calendar
                        :value="value"
                        :disabled-days-of-week="disabled"
                        :format="format"
                        :clear-button="clear"
                        :placeholder="placeholder"
                        :pane="2"
                        :has-input="false"
                        :on-day-click="onDayClick2"
                        :special-days="_dateMap"></calendar>-->
                
                <!--<calendar> input attribute /'readonly v-model="dateValue" @focus="focus" @blur="blur"'/-->
                <!--<calendar :show-date-picker.sync="showDatePicker" 
                          :time.sync="time" 
                          :date-value.sync="dateValue" 
                          v-if="showDatePicker" 
                          transition="calendar">
                </calendar>-->

                <!--<datepicker :value="state.date" 
                            input-class="form-control css-require" 
                            language="th">
                </datepicker>-->
                <date-picker :startDate="'28/04/2017'" :ctrlName="'toDate'"></date-picker>
                <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            </div>

            <button type="submit" class="btn btn-primary">
                <i class="fa fa-pluse" aria-hidden="true"></i> บันทึก
            </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Datepicker from 'vuejs-datepicker'
import DatePicker from '../Utils/date-picker'
/** bootstrap-datepicker */
// import '../../../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
// import '../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js'
// import '../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js'

// var $ = window.jQuery = require('jquery')

export default {
  name: 'reserve-form',
  props: [ 'users' ],
  data () {
    return {
      msg: 'Create New Reservation',
      vehicles: [],
      drivers: [],
      reserves: {
        reserve_id: '',
        reserve_date: '',
        subscriber: '',
        activity: '',
        location: ''
      }
      // calendar component properties
      // showDatePicker: false,
      // dateValue: '',
      // time: 0,
      // status: false
    }
  },
  components: {
    'date-picker': DatePicker
  },
  created: function () {
    this.getReservations()
  },
  mounted () {
    // $(document).ready(function () {
    //   $('#fromdate').datepicker({
    //     format: 'dd/mm/yyyy',
    //     language: 'th'
    //   })
    //   $('#todate').datepicker().on(
    //     'changeDate', () => {
    //       this.startDate = $(this).val()
    //       console.log(this.startDate)
    //     }
    //   )
    // })
  },
  methods: {
    getReservations () {
      axios.get('http://localhost/laravel-pos/public/api/reservations?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvbGFyYXZlbC1wb3NcL3B1YmxpY1wvYXBpXC9hdXRoIiwiaWF0IjoxNDkzMjU5NjIwLCJleHAiOjE0OTMyNjMyMjAsIm5iZiI6MTQ5MzI1OTYyMCwianRpIjoiMGI0Y2QyZWQwYjg2NzQzZjQzOTA1MjFhMmEwMTYxYWEifQ.fGe9SYKoy_UGoBQKZNHyNmPZRCnriJPRUdGeqYtLs0g', {})
      .then(
        (response) => {
          this.reserves = response.data
        }
      )
      .catch(
        (error) => console.log(error)
      )
    }
    // onStartDatetimeChanged: function (newStart) {
    //   var endPicker = this.$.endPicker.control
    //   endPicker.minDate(newStart)
    // }
    // calendar component event listener functions
    // focus () {
    //   this.showDatePicker = true
    // },
    // blur () {
    //   if (this.status) {
    //     return
    //   }
    //   this.showDatePicker = false
    // }
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */
/*@import '../../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';*/

</style>
