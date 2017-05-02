<template>
    <div class="container">
      <ol class="breadcrumb">
        <li><a href="#">หน้าหลัก</a></li>
        <li class="active">{{ msg }}</li>
      </ol>

        <form>
            <div class="form-group">
                <label for="name">Name :</label>
                <input type="text" name="name" value="" class="form-control">
            </div>
            <div class="form-group">
                <label for="email">Email :</label>
                <input type="text" name="email" value="" class="form-control">
            </div>
            <div class="form-group">
                <label for="subject">Subject :</label>
                <input type="text" name="subject" value="" class="form-control">
            </div>
            <div class="form-group">
                <label for="message">Message :</label>
                <textarea class="form-control" rows="5" cols=""></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'contact',
  data () {
    return {
      msg: 'ติดต่อเรา'
    }
  },
  methods: {
    signup () {
      axios.post('http://localhost/laravel-pos/public/products', {
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
