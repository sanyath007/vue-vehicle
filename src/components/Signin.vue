<template>
    <div class="container">
        <h1 class="app-title">{{ msg }}</h1>

        <form>
            <div class="form-group has-feedback" 
                 v-bind:class="{ 'has-success': errors.email.hasSuccess,'has-error': errors.email.hasError }">
                <label class="control-label" for="email">Email :</label>
                <input type="email" name="email" v-model="user.email" class="form-control">
                <span class="glyphicon form-control-feedback"
                      v-bind:class="{ 'glyphicon-ok': errors.email.hasSuccess,'glyphicon-remove': errors.email.hasError }">
                </span>
                <span class="control-label" v-show="errors.email.hasError">{{errors.email.message}}</span>
            </div>
            <div class="form-group has-feedback" 
                 v-bind:class="{ 'has-success': errors.password.hasSuccess,'has-error': errors.password.hasError }">
                <label class="control-label" for="password">Password :</label>
                <input type="password" name="password" v-model="user.password" class="form-control">
                <span class="glyphicon form-control-feedback" 
                      v-bind:class="{ 'glyphicon-ok': errors.password.hasSuccess,'glyphicon-remove': errors.password.hasError }">
                </span>
                <span class="control-label" v-show="errors.password.hasError">{{errors.password.message}}</span>
            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="signin">Signin</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'signin',
  data () {
    return {
      msg: 'Signin your account',
      user: {
        email: '',
        password: ''
      },
      errors: {
        email: {
          hasError: false,
          hasSuccess: false,
          message: ''
        },
        password: {
          hasError: false,
          hasSuccess: false,
          message: ''
        }
      }
    }
  },
  methods: {
    signin () {
      axios.post('http://localhost/laravel-pos/public/api/auth', {
        email: this.user.email,
        password: this.user.password
      }, {
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      })
      .then(
        (response) => {
          const token = response.data.token
          localStorage.setItem('token', token)

          this.errors.email.hasError = false
          this.errors.email.hasSuccess = true
          this.errors.email.message = ''

          this.errors.password.hasError = false
          this.errors.password.hasSuccess = true
          this.errors.password.message = ''

          console.log(this.$route)
          // this.$route.router.go('/')
          // this.$route.router.push('/')
          location.href = '/'
        }
      )
      .catch(
        (error) => {
          this.formValidate(error)
        }
      )
    },
    formValidate (res) {
      if (res) {
        if (res.response.data.email) {
          this.errors.email.hasError = true
          res.response.data.email.forEach(e => {
            this.errors.email.message = e
          })
        } else {
          this.errors.email.hasError = false
          this.errors.email.hasSuccess = true
          this.errors.email.message = ''
        }
        if (res.response.data.password) {
          this.errors.password.hasError = true
          res.response.data.password.forEach(e => {
            this.errors.password.message = e
          })
        } else {
          this.errors.password.hasError = false
          this.errors.password.hasSuccess = true
          this.errors.password.message = ''
        }
      }
    }
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */

</style>
