import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import { MdButton, MdContent, MdTabs, MdChips} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdChips);




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
