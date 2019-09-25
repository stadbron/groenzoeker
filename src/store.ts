import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';
import ApiResource from '@/lib/api-resource';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiResources: {
      hoofdgroenstructuur: new ApiResource('Hoofdgroenstructuur'),
    },
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    updateHoofdgroenstructuurEndpoint(state, value) {
      state.apiResources.hoofdgroenstructuur.setEndpoint(value);
      state.apiResources.hoofdgroenstructuur.refreshData();
    },
  },
  actions: {

  },
});
