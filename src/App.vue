<template>
  <div id="app">
    <TodoList></TodoList>
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
