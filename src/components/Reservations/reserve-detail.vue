<template>
  <div class="container">
    <ol class="breadcrumb">
      <li><a href="#">หน้าหลัก</a></li>
      <li class="active">{{ title }}</li>
    </ol>

    <div class="row">
      <div class="col-md-12">
        <h3 class="app-title">{{ title }}</h3>
        
        <table class="table" width="100%" border="0" cellspacing="3" cellpadding="0">
          <tbody>
            <tr>
              <td width="25%" align="right"><b>รหัส :</b></td>
              <td align="left">{{ reserve.reserve_id }}</td>
            </tr>
            <tr>
              <td width="25%" align="right"><b>วันที่ขอ :</b></td>
              <td align="left">{{ reserve.reserve_date }}</td>
            </tr>
            <tr>
              <td width="25%" align="right"><b>ผู้ขอ :</b></td>
              <td align="left">{{ reserve.subscriber }}</td>
            </tr>
            <tr>
              <td width="25%" align="right"><b>กิจกรรม :</b></td>
              <td align="left">{{ reserve.activity }}</td>
            </tr>
            <tr>
              <td width="25%" align="right"><b>สถานที่ :</b></td>
              <td align="left">{{ reserve.location }}</td>
            </tr>
            <tr>
              <td align="center" colspan="2">
                <router-link to="/reservation/new" class="btn btn-primary">แก้ไขข้อมูล</router-link>
                <router-link to="/reservation/new" class="btn btn-danger">ลบข้อมูล</router-link>  
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
  name: 'reserve-detail',
  props: [ 'users' ],
  data () {
    return {
      title: 'รายละเอียดการขอใช้รถ',
      vehicles: [],
      drivers: [],
      reserve: {}
    }
  },
  created: function () {
    console.log('on created...')
    var _id = this.$route.params.id
    this.getReservation(_id)
  },
  methods: {
    getReservation (_id) {
      const token = localStorage.getItem('token')
      axios.get('http://localhost/laravel-pos/public/api/reservation/' + _id + '?token=' + token, {})
      .then(
        (response) => {
          this.reserve = response.data[0]
          console.log(this.reserve)
        }
      )
      .catch(
        (error) => console.log(error)
      )
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
