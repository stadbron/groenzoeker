<template>
  <div id="app">
    <md-app>

      <md-app-toolbar class="md-primary" md-elevation="0">
        <h1 class="md-title">{{ title }}</h1>
      </md-app-toolbar>

      <md-app-content>
        <Map/>
      </md-app-content>

    </md-app>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  MdApp,
  MdToolbar,
  MdContent,
} from 'vue-material/dist/components';
import Map from '@/components/Map';

Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdContent);

export default {
  name: 'App',
  components: {
    Map,
  },
  data: () => ({
    title: 'Groenzoeker',
  }),
};
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
  }
</style>

<style scoped>
  #app {
    display: flex;
    height: 100%;
  }

  .md-app {
    min-height: 350px;
    border: 1px solid rgba(0, 0, 0 .12);
    flex-grow: 1;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-app-content {
    padding: 0;
  }
</style>
