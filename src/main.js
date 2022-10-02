import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Maska from 'maska'


import '@/assets/styles/global.scss'
import store from './store'

const app = createApp(App).use(store)

app.use(router)
app.use(Maska)

app.mount('#app')
