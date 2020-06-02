
<template>
  <div class="container-fluid">
    <p class="h4 col-12 py-md-3">{{ msg }}</p>
    <div class="card">
      <div class="card-body">
        <label class="card-title">List Demo</label>
        <ul class="list-group">
          <!-- <li v-for="item in heros" :key="item.id" class="list-group-item" :class="{active: selectedItem && item.id === selectedItem.id}" @click="itemSelect(item)">{{ item.name }} -->
            <router-link 
              tag="li" v-for="item in heros" :key="item.id" class="list-group-item" :class="{active: selectedItem && item.id === selectedItem.id}" :to="{name: 'HeroDetail', params:{id: item.id}, props: {hero: item} }">{{ item.name }}</router-link>
          <!-- </li> -->
          
        </ul>
      </div>
    </div>
    <Hero v-if="selectedItem" :hero="selectedItem" @deleteHero="delHero"/>
  </div>
</template>

<script>

import Hero from './Hero.vue'
import { data } from '../shared'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      heros: [
        
      ],
      selectedItem: null
    }
  },
  components:{
    Hero
  },
  methods: {
    itemSelect(item) {
      this.selectedItem = item
    },
    delHero(hero) {
      console.log(hero)
      this.selectedItem = null
      this.heros = []
    },
    async loadHeros() {
      this.heros = await data.getHeros()
    }
  },
  async created() {
    await this.loadHeros()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
