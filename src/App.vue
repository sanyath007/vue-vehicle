<template>
  <div id="app">
    <app-header></app-header>
    
    <div class="row">
      <div class="col-xs-12">        
        <router-view></router-view>
      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/Page/header'
import footer from './components/Page/footer'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'app-header': header,
    'app-footer': footer
  }
}
</script>

<style>
 /*Add "scoped" attribute to limit CSS to this component only */

/*@import '../node_modules/bulma/css/bulma.css';*/
/*@import '../node_modules/bulma/bulma.sass';*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-logo, .app-nav, .app-title {
  text-align: center;
}
</style>
