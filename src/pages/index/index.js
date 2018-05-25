import Vue from 'vue'
import mount from 'vm-mount'
import Home from '@/views/home'

const app = new Vue({
  render: h => h(Home)
})

app.$mount(mount())
