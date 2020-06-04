<template>
  <div class="container" style="margin: 10px">
    <div v-for="hero in heroes" :key="hero.id" class='card'>
      
      <div class="card-body">
        <label class='card-title'>{{ hero.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState({
       heroes: state => state.heroes
    
    }),
    
  }
</script>

<style lang="scss" scoped>

</style>