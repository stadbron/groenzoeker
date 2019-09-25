<template>
    <div class="map">
        <h1>{{title}}</h1>
        <Map/>
    </div>
</template>

<script>
import Map from './Map.vue'

export default {
  name: 'App',
  components: { Map },
  data: () => ({
    title: 'Groenzoeker'
  })
}
</script>

<style>
  html {
    height: 100%;
  }

  body {
    height: 75%;
  }
</style>

<style scoped>
  div {
    height: 100%;
  }
</style>
