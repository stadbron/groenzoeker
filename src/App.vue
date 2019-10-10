<template>
    <div id="app">
        <md-app>

            <md-app-toolbar class="md-accent">
                <md-button class="md-icon-button show-menu" @click="menuVisible = true" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <h1 class="md-title">{{ title }}</h1>
            </md-app-toolbar>

            <md-app-drawer class="main-menu" :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span>Menu</span>

                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense hide-menu" @click="menuVisible = false">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>

                <md-list>
                    <md-list-item class="md-button show-about-dialog" @click="aboutDialogVisible = true">
                        <md-icon>info</md-icon>
                        <span class="md-list-item-text">Over Groenzoeker</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <Map/>
            </md-app-content>

        </md-app>

        <md-dialog-alert
                class="about-dialog"
                :md-active.sync="aboutDialogVisible"
                md-title="Over Groenzoeker"
                md-content="Groenzoeker is een tool die open data gebruikt om je de fijnste groene plekken van Amsterdam te laten zien"
                md-confirm-text="Sluiten"
        />
    </div>
</template>

<script>
import Vue from 'vue';
import {
  MdApp,
  MdButton,
  MdDrawer,
  MdDialog,
  MdDialogAlert,
  MdIcon,
  MdList,
  MdToolbar,
  MdContent,
  MdSpeedDial,
} from 'vue-material/dist/components';
import Map from '@/components/Map';

Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdDialog);
Vue.use(MdDialogAlert);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdToolbar);
Vue.use(MdContent);
Vue.use(MdSpeedDial);

export default {
  name: 'App',
  components: {
    Map,
  },
  data: () => ({
    title: 'Groenzoeker',
    menuVisible: false,
    aboutDialogVisible: false,
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
        border: 1px solid rgba(0, 0, 0 .12);
        flex-grow: 1;
    }

    .md-drawer {
        width: 20em;
        visibility: hidden;
    }

    .md-drawer.md-active {
        visibility: initial;
    }

    .md-app-content {
        padding: 0;
    }
</style>
