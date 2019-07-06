<template>
  <div class="wrapper">
    <img :src="require('@/assets/images/logo.png')"
         alt="Vue Logo"/>
    <SearchBar @search="doSearch"></SearchBar>
    <ListBody></ListBody>
    <FooterBar interval="1"></FooterBar>
  </div>
</template>

<script>
  import { value, watch } from 'vue-function-api'
  import SearchBar from '@/components/SearchBar'
  import ListBody from '@/components/ListBody'
  import FooterBar from '@/components/FooterBar'

  const TodoList = {
    components: { ListBody, SearchBar, FooterBar },
    setup (props, context) {
      // data
      let searchContent = value('')
      // watch
      watch(
        () => searchContent.value,
        (newVal, oldVal) => {
          console.log('current search is: ', newVal)
        }
      )
      // methods
      const doSearch = (search) => {
        console.log('invoke')
        searchContent.value = search
      }
      return {
        searchContent,
        doSearch
      }
    }
  }

  export default TodoList
</script>

<style scoped>

</style>
