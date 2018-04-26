<template>
  <div>
    <div v-for="todo in getTodoList" v-bind:key="todo.id">
        <todo-item v-bind:todo="todo"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TodoItem from './TodoItem'
export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(['getTodoList'])
  }
}
</script>
