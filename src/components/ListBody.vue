<template>
  <div class="list-body">
    <!--add-->
    <p>
      <label for="add">Add: </label>
      <input v-model="addContent"
             id="add"/>
      <button @click="handleAdd">add</button>
    </p>
    <!--display-->
    <p>
      <template v-for="(item, index) in listContent">
        <div :key="index">
          <span>{{item}}</span>
          <button @click="handleRemove(index)"
                  :key="index">&times;
          </button>
        </div>
      </template>
    </p>
    <!--search-->
    <p>Search: {{keyword}}</p>
    <p>
      <template v-for="(item, index) in searchContent">
        <div :key="index">{{item}}</div>
      </template>
    </p>
    <p>total from computing: {{ total }}</p>
  </div>
</template>

<script>
  import { computed, value, watch } from 'vue-function-api'
  import { bus } from '@/utils/bus'

  const ListBody = {
    props: {
      keyword: String,
      count: Number
    },
    setup (props, { root }) {
      // data
      const addContent = value('')
      const listContent = value([])
      const searchContent = value([])
      // computed
      const total = computed(() => listContent.value.length)
      const searchKeyword = computed(() => props.keyword)
      // watch
      watch(
        searchKeyword,
        (newVal) => {
          if (newVal) {
            handleSearch(newVal)
          }
        }
      )
      // methods
      const handleAdd = () => {
        if (addContent.value) {
          listContent.value.push(addContent.value)
          addContent.value = ''
          bus.total++
          root.$store.dispatch('increaseTotal')
        }
      }
      const handleRemove = (index) => {
        listContent.value = listContent.value.filter((v, i) => i !== index)
        bus.total--
        root.$store.dispatch('decreaseTotal')
      }
      const handleSearch = (val) => {
        searchContent.value = listContent.value.filter(v => v.includes(val))
      }
      return {
        addContent,
        listContent,
        searchContent,
        total,
        handleAdd,
        handleRemove
      }
    }
  }

  export default ListBody
</script>
