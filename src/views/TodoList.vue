<template>
  <div class="wrapper">
    <img :src="require('@/assets/images/logo.png')"
         alt="Vue Logo"/>
    <SearchBar @search="doSearch"></SearchBar>
    <p ref="test">{{ asyncData }}</p>
    <!--    <hr/>-->
    <!--    <ListBody v-if="searchContent.value"-->
    <!--              :keyword="searchContent.value"></ListBody>-->
    <!--    <hr/>-->
    <!--    <FooterBar interval="1"></FooterBar>-->
  </div>
</template>

<script>
  import { onMounted, value } from 'vue-function-api'
  import SearchBar from '@/components/SearchBar'
  import ListBody from '@/components/ListBody'
  import FooterBar from '@/components/FooterBar'

  const TodoList = {
    components: { ListBody, SearchBar, FooterBar },
    setup (props, context) {
      // data
      let searchContent = value('')
      let asyncData = value('')
      // hooks; TO BE EXPLICIT
      onMounted(async () => {
        console.log('current search is: ' + searchContent.value)
      })
      // methods
      const doSearch = (search) => {
        searchContent.value = search
      }
      return {
        searchContent,
        asyncData,
        doSearch
      }
    }
  }

  export default TodoList
</script>

<style scoped>

</style>
