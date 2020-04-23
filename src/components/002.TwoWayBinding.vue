<template>
  <div class="card">
    <div class="card-body">
      <label class="card-title">Form Demo</label>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="user.name">
      </div>
      <div class="form-group">
        <label for="age">age</label>
        <input type="text" class="form-control" id="age" v-model="user.age">
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0" v-model="user.gender">
        <label class="form-check-label" for="inlineRadio1">male</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1" v-model="user.gender">
        <label class="form-check-label" for="inlineRadio2">female</label>
      </div> <br>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="user.vip">
        <label class="form-check-label" for="exampleCheck1">isVIP</label>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select class="form-control" id="exampleFormControlSelect2" v-model="user.favoriteColor" 
          @change="selectFavoriteColor"
          @keyup.esc="clear"
        >
          <option disabled selected value="">请选择</option>
          <option v-for="color in colors" :key="color" v-bind:value="color">{{ color }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  
  data() {
    return {
      user: {
        name: "",
        age:"",
        gender: 0,
        vip: false,
        favoriteColor:"",
      },
      colors: [
        "red", "blue", "yellow", "green", "black"
      ]
    }
  },
  methods: {
    selectFavoriteColor() {
      console.log(this.user.favoriteColor)
      $("#exampleFormControlSelect2").css("background-color", this.user.favoriteColor)
    },
    clear() {
      this.user.favoriteColor = ""
      $("#exampleFormControlSelect2").css("background-color", this.user.favoriteColor)
    }
  }
}
</script>

<style>

</style>