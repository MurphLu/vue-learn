import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  heroes: [{id: 1, name: "Bob Wan", age: 13, desc: "hellll"}],
};
const mutations = {};
const actions = {};
const modules = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
