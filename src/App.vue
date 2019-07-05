<template>
  <div id="app">
    <img src="./assets/images/logo.png"
         alt="Vue logo"/>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style>
  @import "assets/css/common.css";
</style>
