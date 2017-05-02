<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3 class="app-title">{{ msg }}</h3>
        <ul>
          <li v-for="user in users">{{user.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user-info',
  props: [ 'users' ],
  data () {
    return {
      msg: 'User lists'
    }
  },
  methods: {
    signup () {
      axios.get('http://localhost/laravel-pos/public/api/users', {})
      .then(
        (response) => console.log(response)
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
