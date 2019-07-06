<template>
  <div class="wrapper">
    <img :src="require('@/assets/images/logo.png')"
         alt="Vue Logo"/>
    <SearchBar @search="doSearch"></SearchBar>
    <hr/>
    <ListBody></ListBody>
    <hr/>
    <FooterBar interval="1"></FooterBar>
  </div>
</template>

<script>
  import { onUnmounted, value, watch } from 'vue-function-api'
  import SearchBar from '@/components/SearchBar'
  import ListBody from '@/components/ListBody'
  import FooterBar from '@/components/FooterBar'

  const TodoList = {
    components: { ListBody, SearchBar, FooterBar },
    setup (props, context) {
      // data
      let searchContent = value('')
      // watch
      const stopWatchingSearch = watch(
        () => searchContent, // data source; I think this comment is NECESSARY
        (newVal, oldVal) => {
          console.log('current search is: ', newVal.value)
        }
      )
      // lifecycle hook; TO BE EXPLICIT
      onUnmounted(() => {
        stopWatchingSearch()
      })
      // methods
      const doSearch = (search) => {
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
