<template>
  <div class="container">
    <ol class="breadcrumb">
      <li><a href="#">หน้าหลัก</a></li>
      <li class="active">{{ msg }}</li>
    </ol>

    <user-info :users="users"></user-info>
  </div>
</template>

<script>
import axios from 'axios'
import UserInfo from './Users/user-info'

export default {
  name: 'about',
  data () {
    return {
      msg: 'เกี่ยวกับเรา',
      users: []
    }
  },
  components: {
    'user-info': UserInfo
  },
  created: function () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      axios.get('http://localhost/laravel-pos/public/api/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvbGFyYXZlbC1wb3NcL3B1YmxpY1wvYXBpXC9hdXRoIiwiaWF0IjoxNDkzMTM3ODYzLCJleHAiOjE0OTMxNDE0NjMsIm5iZiI6MTQ5MzEzNzg2MywianRpIjoiNjdjMjAwNmRhNmU1YTRmOWJkMzdhZjNjMTUyYzcxMmYifQ.IQ_ZTmx9cKbwJnBFPFiXT0vgFjUvVpwreNh64T-xf5k', {})
      .then(
        (response) => { this.users = response.data }
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
