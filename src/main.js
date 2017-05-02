/**
 * The Vue build version to load with the `import` command
 * (runtime-only or standalone) has been set in webpack.base.conf with an alias.
 */
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * ===================== 3rd Party import =====================
 */
/** Adds jQuery to the global object */
// import 'expose-loader?$!expose-loader?jQuery'

/** Import event calendar and css file */
// import 'vue-event-calendar/dist/style.css' // ^1.1.10, CSS has been extracted as one file, so you can easily update it.
// import vueEventCalendar from 'vue-event-calendar'

// import vueCalendar from 'vue-calendar'
// import calendar from 'vue2-calendar'

/** Config app */
Vue.config.productionTip = false

/** Use event calendar and set default language */
// Vue.use(vueEventCalendar, {locale: 'en'}) // locale can be 'zh' or 'en'

// Vue.use(vueCalendar)
// Vue.use(calendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
