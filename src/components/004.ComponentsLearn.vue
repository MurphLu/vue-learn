<template>
  <div class="card">
    <div class="card-body">
      <label class="card-title">List Demo {{ message }}</label>
      <ul class="list-group">
        <li v-for="item in heros" :key="item.id" class="list-group-item" :class="{active: item.id === selectedItem.id}" @click="itemSelect(item)">{{ item.name }}</li>
      </ul>
    </div>
    <div class='card-body' v-show="selectedItem.id != 0"> <!-- 初始就会渲染，只改变display属性 -->
      <p>Name: {{ selectedItem.name }}</p>
    </div>
    <div class='card-body' v-if="selectedItem.id != 0"> <!-- 变为true时才会渲染 -->
      <p>Name: {{ selectedItem.name }}</p>
      <p>{{ fullInfo }}</p>
    </div>
  </div>
</template>

<script>
const items = [
        {
          id: 1,
          name: "bob wan",
          age: 10
        },
        {
          id: 2,
          name: "Sim wan",
          age: 11
        },
        {
          id: 3,
          name: "Joe wan",
          age: 13
        },
        {
          id: 4,
          name: "Jo wan",
          age: 22,
        },
        {
          id: 5,
          name: "Mc wan",
          age: 23
        },
      ]
export default {
  data() {
    return {
      heros: [],
      selectedItem: {
          id: 0,
          name: "",
          age: 0
      },
      message:""
    }
  },
  created() {
    this.loadHeros()
  },
  methods: {
    async getHeros() {
      return new Promise(resolve => {
        setTimeout(()=> resolve(items), 1500);
      });
    },
    async loadHeros() {
      this.heros = [];
      this.message = "loading heros, weaiting please";
      this.heros = await this.getHeros();
      this.message = '';
    },
    itemSelect(item) {
      this.selectedItem = item
    }
  },
  computed: {
    fullInfo() {
      return `${this.selectedItem.name} ${this.selectedItem.age}` 
    }
  },
  watch: {
    selectedItem: function (newValue, oldValue) {
      console.log(`Watcher eva;auted. old=${oldValue.id}. new=${newValue.id}`)
    }
  },
}
</script>

<style>

</style>