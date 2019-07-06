<template>
  <div class="wrapper">
    <SearchBar></SearchBar>
    <ListBody></ListBody>
    <FooterBar :interval="1"></FooterBar>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'
  import ListBody from '@/components/ListBody'
  import FooterBar from '@/components/FooterBar'

  const TodoList = {
    components: { ListBody, SearchBar, FooterBar }
  }

  export default TodoList
</script>

<style scoped>

</style>
