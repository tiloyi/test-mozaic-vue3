import './assets/main.css'
import '@mozaic-ds/vue-3/dist/mozaic-vue.css'

import { createApp } from 'vue'
import MozaicVue from '@mozaic-ds/vue-3'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(MozaicVue)

app.mount('#app')
