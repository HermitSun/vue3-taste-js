<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">TodoList</router-link>
      |
      <router-link to="/lifecycle">Lifecycle</router-link>
      |
      <router-link to="/watcher">Watcher</router-link>
      |
      <router-link to="/this-and-refs">ThisAndRefs</router-link>
    </div>
    <hr/>
    <!--view-->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
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
