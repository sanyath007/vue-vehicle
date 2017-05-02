<template>
  <div class="container">
      <ol class="breadcrumb">
        <li><a href="#">หน้าหลัก</a></li>
        <li class="active">{{ msg }}</li>
      </ol>

      <div class="row">
          <div class="col-md-12">
              <router-link to="/reservation/new" class="btn btn-primary">ขอใช้รถ</router-link>
          </div>
      </div>

    <div class="row">
      <div class="col-md-12">
        <h3 class="app-title">{{ msg }}</h3>
        
        <table class="table table-strips table-hover">
            <thead>
                <tr>
                    <th style="text-align: center;">รหัส</th>
                    <th style="text-align: center;">วันที่ขอ</th>
                    <th style="text-align: center;">ผู้ขอ</th>
                    <th style="text-align: center;">กิจกรรม</th>
                    <th style="text-align: center;">สถานที่</th>
                    <th style="text-align: center;">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reserve in reserves">
                    <td style="text-align: center;">{{reserve.reserve_id}}</td>
                    <td style="text-align: center;">{{reserve.reserve_date}}</td>
                    <td>{{reserve.subscriber}}</td>
                    <td>{{reserve.activity}}</td>                    
                    <td>{{reserve.location}}</td>
                    <td style="text-align: center;">
                      <a @click.prevent="deleteReservation(reserve.reserve_id)" class="btn btn-danger">
                        <i class="fa fa-sign-out"></i> ยกเลิก
                      </a>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'reserve-cancel',
  props: [ 'users' ],
  data () {
    return {
      msg: 'รายการขอใช้รถ',
      vehicles: [],
      drivers: [],
      reserves: []
    }
  },
  created: function () {
    this.getReservations()
  },
  methods: {
    getReservations () {
      const token = localStorage.getItem('token')
      axios.get('http://localhost/laravel-pos/public/api/reservations?token=' + token, {})
      .then(
        (response) => {
          this.reserves = response.data
        }
      )
      .catch(
        (error) => console.log(error)
      )
    },
    updateReservation (_id) {
      console.log(_id)
    },
    deleteReservation (_id) {
      console.log(_id)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
