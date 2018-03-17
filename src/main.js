// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import jquery from 'jquery'
// import VuePicker from  'vue-pickers'

Vue.config.productionTip = false
Vue.use(mintui);

Vue.prototype.axios=axios;
Vue.prototype.$jquery=jquery;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
