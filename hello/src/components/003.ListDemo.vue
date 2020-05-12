<template>
  <div class="card">
    <div class="card-body">
      <label class="card-title">List Demo</label>
      <ul class="list-group">
        <li v-for="item in items" :key="item.id" class="list-group-item" :class="{active: item.id === selectedItem.id}" @click="itemSelect(item)">{{ item.name }}</li>
      </ul>
    </div>
    <div class='card-body' v-show="selectedItem.id != 0"> <!-- 初始就会渲染，只改变display属性 -->
      <p>Name: {{ selectedItem.name }}</p>
    </div>
    <div class='card-body' v-if="selectedItem.id != 0"> <!-- 变为true时才会渲染 -->
      <p>Name: {{ selectedItem.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[
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
      ],
      selectedItem: {
        id: 0,
        name: "",
        age: 0
      }
      }
  },

  methods: {
    itemSelect(item) {
      this.selectedItem = item
    }
  }
}
</script>

<style>

</style>