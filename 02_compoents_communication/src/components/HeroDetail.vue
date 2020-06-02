<template>
  <div class="card">
    <div class="card-body">
      <label class="card-title">hero</label>
      <label>{{ hero.name }}</label>
    </div>
  </div>
</template>

<script>
import { lifecycleHooks } from '../shared'
import { data } from '../shared'

export default {
  name:"HeroDetail",
  props: {
   id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      heros: [],
      hero: undefined
    }
  },
  methods: {
    deleteHero(hero) {
      this.$emit('deleteHero', this.hero)
    }
  },

  mixins: [lifecycleHooks],
  async created() {
    this.heros = await data.getHeros()
    console.log(this.heros)
    var id = this.id
    var selectedhero = this.heros.filter(function(hero){
      console.log(hero)
      console.log(id)
      return hero.id===id
    })
    if(selectedhero.length > 0) {
      this.hero = selectedhero[0]
    }
    console.log(this.componentName)
  }
}
</script>

<style>

</style>