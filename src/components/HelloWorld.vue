<template>
  <div class="hello">
    <h1>{{ propMsg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      propMsg: String
    }
  }
</script>

<style scoped>

</style>
