import { createApp } from 'vue'
import pinia from '@/store'
import { registerDirective } from '@/directive'
import router from './router'
import plugins from './plugins'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(plugins)
registerDirective(app)
app.mount('#app')
