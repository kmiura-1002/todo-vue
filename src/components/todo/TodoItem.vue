<template>
  <div class="form-check">
    <div class="card"
         v-bind:class="{'text-white': expiration, 'bg-warning':expiration}">
      <div class="card-header"
           v-bind:id="'todoh' + todo.id">
        <h5 class="mb-0">
          <button class="btn btn-link"
                  data-toggle="collapse"
                  v-bind:data-target="'#todo' + todo.id"
                  aria-expanded="true"
                  v-bind:aria-controls="'todo' + todo.id">
            <span v-bind:style="{'line-through':todo.status === 'finished'}">{{todo.value}}</span>
            <span v-if="todo.status === 'finished'"
                  class="badge badge-danger">Finished</span>
            <span v-else-if="new Date() > new Date(todo.deadline)"
                  class="badge badge-danger">Expiration</span>
          </button>
        </h5>
      </div>
      <div v-bind:id="'todo' + todo.id"
           class="collapse show"
           v-bind:aria-labelledby="'todoh' + todo.id"
           data-parent="#accordion">
        <div class="card-body">
          <div>
            <strong>Description:</strong><br/>
            <Nl2br v-bind:text="todo.description"></Nl2br>
          </div>
          <div>
            <strong>Deadline:</strong> {{todo.deadline}}
          </div>
          <div class="btn-toolbar">
            <div class="btn-group">
              <button type="button"
                      class="btn btn-success"
                      v-on:click="changeStatus">{{todo.status}}</button>
              <button type="button"
                      class="btn btn-danger"
                      v-on:click="deleteTodo">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoTypes from '../../store/modules/TodoTypes'
import Nl2br from '../common/Nl2br'

export default {
  components: {
    Nl2br
  },
  props: ['todo'],
  methods: {
    changeStatus (e) {
      const nextTodo = Object.assign({}, this.todo)
      nextTodo.status = nextTodo.status === 'finished' ? 'unfinished' : 'finished'
      this.$store.dispatch(TodoTypes.EDIT_TODO, nextTodo)
    },
    deleteTodo (e) {
      if (window.confirm('Do you want to delete this Todo?')) {
        this.$store.dispatch(TodoTypes.DELETE_TODO, this.todo)
      }
    }
  },
  computed: {
    expiration: function () {
      return new Date() > new Date(this.todo.deadline) &&
      this.todo.status === 'unfinished'
    }
  }
}
</script>
