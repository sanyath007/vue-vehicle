<template>
  <div class="container">
    <h1 class="app-title">{{ msg }}</h1>

    <form>
      <div class="form-group">
        <label for="name">Name :</label>
        <input type="text" name="name" value="" v-model="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" name="email" value="" v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password :</label>
        <input type="password" name="password" value="" v-model="password" class="form-control">
      </div>
      <div class="form-group">
        <label for="password confirm">Password confirm :</label>
        <input type="password" name="confirm" value="" v-model="confirm" class="form-control">
      </div>

      <button type="submit" class="btn btn-primary" @click.prevent="signup">Signup</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'signup',
  data () {
    return {
      msg: 'Signup for more information',
      name: '',
      email: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    signup () {
      axios.post('http://localhost/laravel-pos/public/api/signup', {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm: this.confirm
      })
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

<style>
 /*Add "scoped" attribute to limit CSS to this component only */

</style>
