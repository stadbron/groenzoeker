import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import MainMap from './components/App.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_MAPS_API_KEY,
    libraries: 'places'
  }
})

document.addEventListener('DOMContentLoaded', function () {
  Vue.component('google-map', VueGoogleMaps.Map)

  const app = new Vue({
    el: '#app',
    render: h => h(MainMap)
  })

  if (app) {
    console.log('App loaded.')
  }
})
