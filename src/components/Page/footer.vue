<template>
<footer class="text-muted" style="margin-top: 15px; padding-top: 10px; background-color: #3c3d41;">
  <div id="footer-bottom" class="container-fluid" style="background-color: #000; color: #fff; height: 80px;">
    <div class="col-md-12" style="padding-top: 10px;">
      <p class="text-muted credit">
        {{msg}}<br>
        เวอร์ชั่น 1.0 Designed by <a href="http://www.querysoft.com">{{creator}}</a><br>
        รองรับการทำงานบน :
        <span style="color: #fff; margin: 0px; padding: 0px;">
          <i class="fa fa-chrome fa-lg" aria-hidden="true"></i>
          <i class="fa fa-firefox fa-lg" aria-hidden="true"></i>
          <i class="fa fa-safari-square fa-lg" aria-hidden="true"></i>
          <i class="fa fa-edge fa-lg" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  </div>
</footer>
</template>

<script>
// import 'https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js'

// var $ = window.jQuery = require('jquery')

export default {
  name: 'footer',
  data () {
    return {
      msg: '© ลิขสิทธิ์ถูกต้อง 2560',
      creator: 'บริษัท Query Soft จำกัด'
    }
  },
  mounted () {
    // $(document).ready(function(){
    //   $("[rel='tooltip']").tooltip();
    // })
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */

</style>
