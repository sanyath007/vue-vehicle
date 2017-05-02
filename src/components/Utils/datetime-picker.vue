<template>
<div class="input-group date">
    <input type="text" class="form-control" v-model="value" v-bind:name="ctrlName">
    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
</div>
</template>

<script>
/** bootstrap-datepicker */
import '../../../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
import '../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js'
import '../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js'

var $ = window.jQuery = require('jquery')

export default {
  name: 'datepicker',
  props: [ 'startDate', 'ctrlName' ],
  data () {
    return {
      msg: 'Datepicker',
      name: '',
      value: ''
    }
  },
  created: function () {
    this.value = this.startDate
  },
  methods: {
  },
  mounted () {
    $(document).ready(function () {
      $('input[type="text"]').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true
      })
    })
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */
@import '../../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';

</style>
