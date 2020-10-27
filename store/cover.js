import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const state = () => ({
  cover: '',
})

export const mutations = {
  set(state, payload) {
    state.cover = payload;
    console.log(payload);
  },
}
export default {
  state,
  mutations,
}
