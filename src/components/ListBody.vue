<template>
  <div class="list-body">
    <p>Received search content: {{searchContent}}</p>
  </div>
</template>

<script>
  import { onMounted, value } from 'vue-function-api'

  const ListBody = {
    props: {
      keyword: String
    },
    setup (props, context) {
      // data
      const searchContent = value(props.keyword)
      // hooks
      onMounted(() => {
        console.log('body received: ' + searchContent.value)
      })
      return {
        searchContent
      }
    }
  }

  export default ListBody
</script>

<style scoped>

</style>
