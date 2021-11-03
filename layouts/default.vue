<template>
  <div id="app">
    <nav-bar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  name: 'Default',
  components: { NavBar }
}
</script>

<style scoped>
  #app {
    font-family: Montserrat;
  }

</style>
