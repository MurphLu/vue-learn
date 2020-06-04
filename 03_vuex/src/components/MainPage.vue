<template>
  <div class="container-fluid" style="margin: 10px 10px 10px -10px">
    <div class='row' style="height: auto !important;">
    <div class='col-3 bd-sidebar'><NavBar /></div>
    <div class='col-9'><Container /></div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Container from './Container.vue'
export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    NavBar,
    Container,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
