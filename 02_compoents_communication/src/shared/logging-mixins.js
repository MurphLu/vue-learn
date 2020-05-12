export const lifecycleHooks = {
  computed: {
    componentName() {
      return `${this.$options.name} component`; 
    }
  },
  created() {
    console.log(`${this.componentName} created hook called`)
  }
}