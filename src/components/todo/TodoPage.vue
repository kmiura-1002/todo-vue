<template>
    <PageTemplate>
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Todo List</h1>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <div class="card-header">
                    Todo View
                </div>
                <div class="card-body">
                    <TodoItemView/>
                    <hr/>
                    <form v-on:submit.prevent="addTodo">
                        <div class="form-row align-items-center row">
                            <div class="col-auto col-12">
                                <label class="sr-only" htmlFor="inlineFormInput">Add Todo</label>
                                <div class="input-group mb-3">
                                    <input name="value" type="text" v-model="todo.value" required class="form-control" id="inlineFormInput" placeholder="Todo" />
                                    <div class="input-group-append">
                                        <a class="input-group-prepend btn btn-primary" data-toggle="collapse" href="#detail" role="button" aria-expanded="false" aria-controls="detail">Detail</a>
                                    </div>
                                </div>
                                <div class="col-auto mb-3 collapse" id="detail">
                                    <div class="card card-body">
                                        <div class="form-group">
                                            <label htmlFor="description">
                                                    <strong>Description:</strong>
                                                </label>
                                            <textarea v-model="todo.description" name="description" d="text" class="form-control" ></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="date">
                                                    <strong>Deadline:</strong>
                                                </label>
                                            <input v-model="todo.deadline" name="deadline" type="date" class="form-control" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2">Add Todo</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <hr/>
        </div>
    </PageTemplate>
</template>
<script>
import TodoTypes from '../../store/modules/TodoTypes'
import PageTemplate from '../common/PageTemplate'
import TodoItemView from './TodoItemView'

export default {
  components: {
    PageTemplate,
    TodoItemView
  },
  name: 'todo-page',
  methods: {
    addTodo (e) {
      this.$store.dispatch(TodoTypes.ADD_TODO, this.todo)
      this.todo = {
        value: '',
        description: '',
        deadline: '',
        status: 'unfinished',
        availability: true
      }
    }
  },
  data () {
    return {
      todo: {
        value: '',
        description: '',
        deadline: '',
        status: 'unfinished',
        availability: true
      }
    }
  }
}
</script>
