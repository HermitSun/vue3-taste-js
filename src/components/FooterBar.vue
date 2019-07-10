<template>
  <div class="footer-bar">
    <template v-for="i in localInterval">
      <span :key="i">br{{ i }}<br/></span>
    </template>
    <hr/>
    <span>total from bus using state: {{ total }}</span>
    |
    <button @click="expandInterval">expand</button>
  </div>
</template>

<script>
  import { computed, onMounted, value } from 'vue-function-api'
  import { bus } from '@/utils/bus'

  const FooterBar = {
    props: {
      interval: String
    },
    setup (props, context) {
      // local data, or from bus
      const localInterval = value(Number(props.interval))
      const total = computed(() => bus.total)
      // mounted
      onMounted(() => {
        console.log('after mounted: interval is ' + props.interval)
      })
      // methods
      const expandInterval = () => {
        localInterval.value++
        console.log('after expanded: interval is ' + localInterval.value)
      }
      return {
        localInterval,
        total,
        expandInterval
      }
    }
  }
  export default FooterBar
</script>
