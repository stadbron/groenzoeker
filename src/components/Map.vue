<template>
  <div>
    <google-map
      class="map"
      :center="{lat:52.37, lng:4.90}"
      :zoom="13"
      :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
    >
    </google-map>
  </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style scoped>
  .map {
    border: #CFEFC2 5px solid;
    height: 100%;
  }
</style>
