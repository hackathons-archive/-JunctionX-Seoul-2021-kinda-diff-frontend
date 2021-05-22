import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { MdButton, MdDialog, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'



Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdTabs);


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
