<template>
  <div class="card">
    <div class="card-body">
      <label class="card-title">hero</label>
      <label>{{ hero.name }}</label>
      <button @click="deleteHero">delete</button>
    </div>
  </div>
</template>

<script>
import { lifecycleHooks } from '../shared'

export default {
  name:"Hero",
  props: {
    id: {
      type: Number,
      default: 0
    }
    // hero: {
    //   type: Object,
    //   default: () => {}
    // },
  },
  methods: {
    deleteHero(hero) {
      this.$emit('deleteHero', this.hero)
    }
  },
  mixins: [lifecycleHooks],
  created() {
    console.log(this.componentName)
  }
}
</script>

<style>

</style>