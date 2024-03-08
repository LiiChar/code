<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <div class="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template> 

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>