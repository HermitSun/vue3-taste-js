<template>
  <div class="wrapper">
    <SearchBar></SearchBar>
    <ListBody></ListBody>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'
  import ListBody from '@/components/ListBody'

  const TodoList = {
    components: { ListBody, SearchBar }
  }

  export default TodoList
</script>

<style scoped>

</style>
