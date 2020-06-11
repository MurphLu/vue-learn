<template>
  <div>
    <div v-if="hero">{{ hero.name }}</div>
    <input v-if="hero" type="text" v-model="hero.name" @change="nameChanged">
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import { cloneDeep } from 'lodash';
export default {
  data() {
    return {
      hero: undefined,
    }
  },
  props: {
   id: {
      type: Number,
      default: 0
    }
  },
  methods: {  
    async nameChanged() {
      this.updateHero(cloneDeep(this.hero));
    },
    ...mapActions([
      'updateHero',
    ]),
  },
  computed: {
    ...mapGetters([
      'getHeroById',
    ])
  },
  async created () {
    this.hero = cloneDeep(this.getHeroById(this.id));
  },
}
</script>

<style>

</style>