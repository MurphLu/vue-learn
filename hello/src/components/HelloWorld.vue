
<template>
  <div class="container-fluid">
    <p class="h4 col-12 py-md-3">{{ msg }}</p>
    <PropertyBinding />
    <TwoWayBinding />
    <ListDemo />
    <Comp />
  </div>
</template>

<script>

import PropertyBinding from './001.PropertyBinding.vue'
import TwoWayBinding from './002.TwoWayBinding.vue'
import ListDemo from './003.ListDemo.vue'
import Comp from './004.ComponentsLearn.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    PropertyBinding,
    TwoWayBinding,
    ListDemo,
    Comp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
