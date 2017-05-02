<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3 class="app-title">{{ msg }}</h3>
        <ul>
          <li v-for="driver in drivers">{{driver.description}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'driver-list',
  props: [ 'users' ],
  data () {
    return {
      msg: 'Driver Lists',
      drivers: []
    }
  },
  created: function () {
    this.getDrivers()
  },
  methods: {
    getDrivers () {
      axios.get('http://localhost/laravel-pos/public/api/drivers?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvbGFyYXZlbC1wb3NcL3B1YmxpY1wvYXBpXC9hdXRoIiwiaWF0IjoxNDkzMTk5NTU1LCJleHAiOjE0OTMyMDMxNTUsIm5iZiI6MTQ5MzE5OTU1NSwianRpIjoiMTY4N2FmNGZlYWQwNzk5M2E0MzMyODMwY2VjZGQxNDQifQ.jJAmDY_Pu4JVcqub9ctw1djXE8LcpJVGcr9b44-hOgg', {})
      .then(
        (response) => {
          this.drivers = response.data
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
