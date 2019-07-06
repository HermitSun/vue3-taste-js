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
  import { onCreated, onBeforeMount, onMounted, onUnmounted, value, watch } from 'vue-function-api'
  import axios from 'axios'
  import SearchBar from '@/components/SearchBar'
  import ListBody from '@/components/ListBody'
  import FooterBar from '@/components/FooterBar'

  const TodoList = {
    components: { ListBody, SearchBar, FooterBar },
    setup (props, context) {
      // data
      let searchContent = value('')
      let asyncData = value('')
      // watch
      const stopWatchingSearch = watch(
        searchContent,
        // data source; I think this comment is NECESSARY.
        // else you can use '() => searchContent.value', as the RFC says.
        async (newVal, oldVal) => {
          console.log('current search is: ' + newVal)
          let res = await axios.post('/test', {
            test: newVal
          })
          asyncData.value = res.data.test
          console.log('current async data is: ' + context.refs.test.innerText)
          console.log('from server: ' + res.data.test)
        },
        // this function will be called BEFORE created.
        // and you can see the same result be printed TWICE.
        {
          flush: 'post'
        }
      )
      // hooks; TO BE EXPLICIT
      onCreated(() => {
        console.log('-ON CREATE-')
      })
      onBeforeMount(() => {
        console.log('-BEFORE MOUNT-')
      })
      onMounted(async () => {
        console.log('-ON MOUNT-')
        console.log('current search is: ' + searchContent.value)
      })
      onUnmounted(() => {
        stopWatchingSearch()
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
