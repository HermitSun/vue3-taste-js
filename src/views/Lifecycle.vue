<template>
  <div>
    <p>LIFECYCLE</p>
  </div>
</template>

<script>
  import {
    onCreated,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onActivated,
    onDeactivated,
    onUnmounted
  } from 'vue-function-api'

  const LifecycleComponent = {
    setup (props, context) {
      onCreated(() => {
        console.log('-ON CREATE-')
      })
      onBeforeMount(() => {
        console.log('-BEFORE MOUNT-')
      })
      onMounted(() => {
        console.log('-ON MOUNT-')
      })
      onBeforeUpdate(() => {
        console.log('-BEFORE UPDATE-')
      })
      onUpdated(() => {
        console.log('-ON UPDATE-')
      })
      onActivated(() => {
        console.log('-ON ACTIVATED-')
      })
      onDeactivated(() => {
        console.log('-ON DEACTIVATED-')
      })
      onUnmounted(() => {
        console.log('-ON UNMOUNT-')
      })
    }
  }
  export default LifecycleComponent
</script>

<style scoped>

</style>
