import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

function getData(params) {
  return Promise.resolve({})
}

getData()
