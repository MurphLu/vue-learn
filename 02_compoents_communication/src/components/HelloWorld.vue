
<template>
  <div class="container-fluid">
    <p class="h4 col-12 py-md-3">{{ msg }}</p>
    <div class="card">
      <div class="card-body">
        <label class="card-title">List Demo</label>
        <ul class="list-group">
          <li v-for="item in heros" :key="item.id" class="list-group-item" @click="itemSelect(item)">{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <Hero v-if="selectedItem" :hero="selectedItem" @deleteHero="delHero"/>
  </div>
</template>

<script>

import Hero from './Hero.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      heros: [
        {
          "id": "1",
          "name": "Hale",
          "age": 12,
        },
        {
          "id": "2",
          "name": "Wall",
          "age": 19,
        },{
          "id": "3",
          "name": "Kabu",
          "age": 15,
        }
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
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
