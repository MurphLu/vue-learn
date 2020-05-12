<template>
  <div class="card">
    <div class="card-body py-md-3">
      <label class="card-title">Property Binding</label>
      <ul class="list-group">
        <li class="list-group-item">
          <a :href="babel">babel</a>
        </li>
        <li class="list-group-item">
          <a :href="eslint">eslint</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      babel: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
      eslint: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
    }
  }
}
</script>

<style>
a {
  color: #42b983;
}
</style>