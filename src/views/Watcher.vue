<template>
  <div>
    <div>
      <p>immediate + post</p>
      <div ref="test1">{{test1}}</div>
      <button @click="handleClick1">test</button>
      <div>new: {{test1NewVal}}</div>
      <div>old: {{test1OldVal}}</div>
      <div>before request: {{test1BeforeRequest}}</div>
      <div>after request: {{test1AfterRequest}}</div>
    </div>
    <hr/>
    <div>
      <p>lazy + pre</p>
      <div ref="test2">{{test2}}</div>
      <button @click="handleClick2">test</button>
      <div>new: {{test2NewVal}}</div>
      <div>old: {{test2OldVal}}</div>
      <div>before request: {{test2BeforeRequest}}</div>
      <div>after request: {{test2AfterRequest}}</div>
    </div>
  </div>
</template>

<script>
  import {
    onUnmounted, value, watch,
    onCreated,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onActivated,
    onDeactivated,
    onBeforeDestroy,
    onDestroyed
  } from 'vue-function-api'
  import { getServerResponseUsingAsync, getServerResponseUsingPromise } from '@/api'

  const WatcherComponent = {
    setup (props, context) {
      const test1 = value('begin')
      const test1NewVal = value('')
      const test1OldVal = value('')
      const test1BeforeRequest = value('')
      const test1AfterRequest = value('')
      const test2 = value('begin')
      const test2NewVal = value('')
      const test2OldVal = value('')
      const test2BeforeRequest = value('')
      const test2AfterRequest = value('')
      const handleClick1 = () => {
        test1.value = 'end'
      }
      const handleClick2 = () => {
        test2.value = 'end'
      }
      const stopWatch1 = watch(
        // data source; I think this comment is NECESSARY.
        // also you can use '() => test1.value', as the RFC says.
        test1,
        // this function will be called BEFORE created.
        // and you can see the same result be printed TWICE.
        async (newVal, oldVal) => {
          test1NewVal.value = newVal
          test1OldVal.value = oldVal
          // because of the async update queue, here represents the same
          // actually values are different
          test1BeforeRequest.value = context.refs.test1.innerText
          let res = await getServerResponseUsingAsync()
          test1.value = res.test
          test1AfterRequest.value = context.refs.test1.innerText
        }
      )
      const stopWatch2 = watch(
        test2,
        async (newVal, oldVal) => {
          test2NewVal.value = newVal
          test2OldVal.value = oldVal
          getServerResponseUsingPromise()
            .then(res => {
              test2.value = res.data.test
              test2AfterRequest.value = context.refs.test2.innerText
            })
            .catch(err => {
              console.log(err.toString())
            })
          test2BeforeRequest.value = context.refs.test2.innerText
        },
        {
          lazy: true,
          flush: 'pre'
        }
      )
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
        stopWatch1()
        stopWatch2()
      })
      return {
        test1,
        test1NewVal,
        test1OldVal,
        test1BeforeRequest,
        test1AfterRequest,
        test2,
        test2NewVal,
        test2OldVal,
        test2BeforeRequest,
        test2AfterRequest,
        handleClick1,
        handleClick2
      }
    }
  }

  export default WatcherComponent
</script>
