import './assets/main.css'

import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import { Avatar, Menubar } from 'primevue'
import AnimateOnScroll from 'primevue/animateonscroll'
import './style.css'
import { createApp } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(AOS)
app.directive('animateonscroll', AnimateOnScroll)

app.component('PVButton', Button)
app.component('PVNavBar', Menubar)
app.component('PVAvatar', Avatar)

app.mount('#app')
