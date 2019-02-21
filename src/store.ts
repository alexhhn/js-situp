import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import GruppeService from '@/services/GruppeService.js';

const instance = axios.create();
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grupper: [],
  },
  getters: {
    getGrupper: state => {
      return state.grupper;
    },
  },
  mutations: {
    fetchGruppe: (state: any, payload: { data: [{ name: string; url: string }] }) => {
      console.log(payload.data, 'payload');
      state.grupper = payload.data;
    },

    addGruppe: (state: any, { name, url }: { name: string; url: string }) => {
      let id: number = 0;
      if (state.grupper.length !== 0) {
        id = state.grupper[state.grupper.length - 1].id + 1;
      }
      state.grupper.push({
        id: id,
        name: name,
        imgSrc: url,
      });
    },
    updateUrl: (state: any, { name, url }: { name: string; url: string }) => {
      let gruppe = state.grupper.find((gruppe: any) => {
        return gruppe.name === name;
      });
      if (gruppe != null) {
        gruppe.imgSrc = url;
      }
    },
  },
  actions: {
    FETCH_GRUPPE: async (context: any) => {
      const grupper = await GruppeService.getGrupper();
      context.commit('fetchGruppe', grupper);
    },
    ADD_GRUPPE: async (context: any, payload: { name: string; url: string }) => {
      await GruppeService.addGruppe(payload);
      context.commit('addGruppe', payload);
    },
    UPDATE_URL: async (context: any, payload: { name: string; url: string }) => {
      await GruppeService.endreGruppe(payload);
      return instance.get(payload.url).then(() => {
        context.commit('updateUrl', payload);
      });
    },
  },
});
