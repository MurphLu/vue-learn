<template>
  <div class="container">
    <div v-for="hero in heroes" :key="hero.id" class='card'>
      
      <div class="card-body">
        
        <router-link tag='a' :to="{name: 'HeroDetail', params:{id: hero.id}}" >{{ hero.name }}</router-link>
        <label class='card-title'>{{ hero.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
    ...mapState({
       heroes: state => state.heroes
    
    }),

    },

    methods: {
      ...mapActions([
        'getHeroesAction', //also supports payload `this.nameOfAction(amount)` 
      ]),
      
      async loadHeroes() {
        this.getHeroesAction();
      },
    },
    async created() {
      await this.loadHeroes()
    }
  }
</script>

<style lang="scss" scoped>

</style>