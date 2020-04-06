import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';

import 'common/stylus/index.styl';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
axios.defaults.baseURL = '';
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueResource);
Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
