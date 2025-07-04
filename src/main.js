import { createApp } from 'vue'
import './style.css'
import './assets/main.css'
import App from './App.vue'

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const app = createApp(App)

app.use(VueViewer)
app.mount('#app')
