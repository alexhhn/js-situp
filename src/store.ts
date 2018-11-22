import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

const instance = axios.create();
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grupper: []
  },
  getters: {
    getGrupper: state => {
      return state.grupper;
    },
  },
  mutations: {
    ADD_GRUPPE: (state: any, {name, url}: {name: string, url: string}) => {
      let id:number = 0;
      if (state.grupper.length !== 0) {
        id = state.grupper[state.grupper.length-1].id + 1
      }
      state.grupper.push({
        id: id,
        name: name,
        imgSrc: url
      });
    },
    UPDATE_URL: (state: any, {id, url}: {id: number, url: string}) => {
      let gruppe = state.grupper.find((gruppe:any) => {
        return gruppe.id === id;
      });
      if (gruppe != null) {
        gruppe.imgSrc = url;
      }
    }
  },
  actions: {
    ADD_GRUPPE: (context: any, payload: {name: string, url: string}) => {
      context.commit("ADD_GRUPPE", payload);
    },
    UPDATE_URL: (context: any, payload: {name: string, url: string}) =>  {
      return instance.get(payload.url).then(() => {
        context.commit("UPDATE_URL", payload);
      });
    }
  }
});
