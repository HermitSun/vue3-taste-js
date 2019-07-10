<template>
  <div>
    <p>{{content}}</p>
    <button @click="triggerContentChange">update</button>
    <Parent>
      <Child></Child>
    </Parent>
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
    onBeforeDestroy,
    onDestroyed,
    onUnmounted,
    value
  } from 'vue-function-api'
  import Parent from '@/components/Parent'
  import Child from '@/components/Child'

  const LifecycleComponent = {
    components: { Parent, Child },
    setup (props, context) {
      const content = value('LIFECYCLE')
      const triggerContentChange = () => {
        content.value += ' changed'
      }
      // hooks; TO BE EXPLICIT
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
        console.log('-ON ACTIVATE-')
      })
      onDeactivated(() => {
        console.log('-ON DEACTIVATE-')
      })
      onBeforeDestroy(() => {
        console.log('-BEFORE DESTROY-')
      })
      onDestroyed(() => {
        console.log('-ON DESTROY-')
      })
      onUnmounted(() => {
        console.log('-ON UNMOUNT-')
      })
      return {
        content,
        triggerContentChange
      }
    }
  }

  export default LifecycleComponent
</script>
