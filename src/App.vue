<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">TodoList</router-link>
      |
      <router-link to="/lifecycle">Lifecycle</router-link>
      |
      <router-link to="/watcher">Watcher</router-link>
    </div>
    <hr/>
    <!--view-->
    <router-view></router-view>
  </div>
</template>

<script>
  import TodoList from '@/views/TodoList'

  const app = {
    components: { TodoList }
  }

  export default app
</script>

<style>
  @import "assets/css/common.css";
</style>
