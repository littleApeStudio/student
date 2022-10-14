import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*  引入 element-ui 组件  */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/*  引入 element-ui 组件  */
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
