<template>
  <div class="footer-bar">
    <template v-for="i in localInterval">
      <span :key="i">br{{ i }}<br/></span>
    </template>
    <br/>
    <div>total from bus using state: {{ total }}</div>
    <div>total from store using store: {{ store }}</div>
    <button @click="expandInterval">expand</button>
  </div>
</template>

<script>
  import { computed, onMounted, value } from 'vue-function-api'
  import { useStore } from '@/store'
  import { bus } from '@/utils/bus'

  const FooterBar = {
    props: {
      interval: String
    },
    setup (props) {
      // local data, or from bus/store
      const localInterval = value(Number(props.interval))
      const total = computed(() => bus.total)
      const store = computed(() => useStore().state.total)
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
        store,
        expandInterval
      }
    }
  }
  export default FooterBar
</script>
