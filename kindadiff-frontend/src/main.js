import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        orange: "#F8981D",
      }
    }
  }
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
