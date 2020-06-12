import Vue from 'vue'
import Vuex from 'vuex'
import { dataService } from '../shared'
import { GET_HEROES, UPDATE_HERO, ADD_HERO, DELETE_HERO } from './mutation-types.js'

Vue.use(Vuex)

const state = {
  heroes: [],
};
const mutations = {
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
  
  [UPDATE_HERO](state, hero) {
    var index = state.heroes.findIndex(h => h.id === hero.id );
    state.heroes.splice(index, 1, hero);
  },
  
  [ADD_HERO](state, hero) {
    state.heroes.push(hero);
  },

  [DELETE_HERO](state, hero) {
    state.heroes = [...state.heroes.filter(h=> h.id != hero.id)];
  }
};
const actions = {
  async getHeroesAction({commit}) {
    const heroes = await loadHeroes.loadHero();
    commit(GET_HEROES, heroes);
  },

  async updateHero({commit}, hero) {
    commit(UPDATE_HERO, hero);
  },

  async addHero({commit}, hero) {
    commit(ADD_HERO, hero);
  },

  async deleteHero({commit}, hero) {
    commit(DELETE_HERO, hero)
  }
};
const modules = {};
const getters = {
  getHeroById: state => id => state.heroes.find(h => h.id === id),
};

 const loadHeroes = {
  async loadHero() {
    if(state.heroes.length == 0) {
      return await dataService.getHeroes();
    }else {
      return state.heroes
    }
  },
}

export default new Vuex.Store({
  strict: process.env.NODE_VNE != 'production',
  state,
  mutations,
  actions,
  modules,
  getters
})
