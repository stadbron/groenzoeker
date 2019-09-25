<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    data-projection="EPSG:4326"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    />

    <vl-layer-tile>
      <vl-source-osm class="base-layer"></vl-source-osm>
    </vl-layer-tile>

  </vl-map>
</template>

<script>
import Vue from 'vue';
import {
  Geoloc,
  Map,
  TileLayer,
  OsmSource,
} from 'vuelayers';
import 'vuelayers/lib/style.css';

Vue.use(Geoloc);
Vue.use(Map);
Vue.use(OsmSource);
Vue.use(TileLayer);

export default {
  name: 'Map',
  components: {
    Geoloc,
    Map,
    OsmSource,
    TileLayer,
  },
  data() {
    return {
      zoom: 13,
      center: [4.9, 52.37],
      rotation: 0,
    };
  },
};
</script>
