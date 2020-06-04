<template>
  <div id="app">
    <Header />
    <MainPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    Header,
  }
}
</script>

<style>

</style>
