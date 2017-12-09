import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import routes from './router';
import i18nResources from './../config/client/i18n'

import Http from './modules/http';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(new Http(), {url: 'http://localhost', port: SRV_PORT});

const router = new VueRouter({routes});
const i18n = new VueI18n({ locale: 'en', messages: i18nResources});

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
