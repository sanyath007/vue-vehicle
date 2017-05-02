<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>            
            <router-link to="/" class="navbar-brand">DNRH VehicleRS</router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><router-link to="/">หน้าหลัก</router-link></li>
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    ขอใช้รถ
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/reservations">รายการขอใช้รถ</router-link></li>
                    <li><router-link to="/reservation">ขอใช้รถ</router-link></li>                    
                    <li><router-link to="/reserve-cancel">ยกเลิกขอใช้รถ</router-link></li>                    
                  </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    ตั้งค่าระบบ
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                    <li><router-link to="/vehicles">ข้อมูลรถ</router-link></li>
                    <li><router-link to="/drivers">ข้อมูลคนขับรถ (พขร.)</router-link></li>
                    <!--<li><a href="#">Something else here</a></li>-->
                    <!--<li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">One more separated link</a></li>-->
                    </ul>
                </li>                
                <li><router-link to="/about">เกี่ยวกับเรา</router-link></li>
                <li><router-link to="/contact">ติดต่อเรา</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <template v-if="isGuest">
                    <li><router-link to="/signin">Login</router-link></li>
                    <li><router-link to="/signup">Resgister</router-link></li>
                </template>
                <li class="dropdown" v-if="!isGuest">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        Admin
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a v-on:click.prevent="logout()">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'App Header',
      isGuest: false
    }
  },
  methods: {
    logout () {
      this.isGuest = true
      console.log(this.isGuest)
    }
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */

</style>
