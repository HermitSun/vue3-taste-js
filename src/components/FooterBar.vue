<template>
  <div class="footer-bar">
    <template v-for="i in localInterval">
      <br :key="i"/>
    </template>
    <button @click="expandInterval">expand</button>
  </div>
</template>

<script>
  import { onMounted, value } from 'vue-function-api'

  const FooterBar = {
    props: {
      interval: Number
    },
    setup (props, context) {
      // data
      const localInterval = value(props.interval)
      // mounted
      onMounted(() => {
        console.log('after mounted: ' + props.interval)
      })
      // methods
      const expandInterval = () => {
        localInterval.value++
        console.log('after expanded: ' + localInterval.value)
      }
      return {
        localInterval,
        expandInterval
      }
    }
  }
  export default FooterBar
</script>

<style scoped>

</style>
