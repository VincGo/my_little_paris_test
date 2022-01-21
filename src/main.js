import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import './assets/styles/general.scss'

library.add(fas)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
