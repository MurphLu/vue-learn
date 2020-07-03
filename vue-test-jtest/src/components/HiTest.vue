<template>
  <div>
  <h1>{{ message }}</h1>
  <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: ""
      },
    },
    computed: {
      error() {
        return this.message.trim().length < 3 ? "the child can say bigger words than that ! " : ""  ;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>