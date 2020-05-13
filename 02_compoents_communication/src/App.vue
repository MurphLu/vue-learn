<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">vue</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav">
          <router-link to="/home" class='nav-item nav-link' activeClass='active' exactActiveClass=''>Home</router-link>
          <router-link to="/about" class='nav-item nav-link' activeClass='active' exactActiveClass=''>About</router-link>
        </div>
      </div>
    </nav>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style>
</style>
