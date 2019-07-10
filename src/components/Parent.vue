<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import { onErrorCaptured } from 'vue-function-api'

  export default {
    // errorCaptured (err, vm, info) {
    //   console.log('Parent: ' + err.toString())
    //   console.log('info: ' + info)
    //   return false
    // },
    setup () {
      onErrorCaptured((err, vm, info) => {
          console.log('invoked')
          console.log('Parent: ' + err.toString())
          console.log('info: ' + info)
          return false
        }
      )
    }
  }
</script>

<style scoped>

</style>
