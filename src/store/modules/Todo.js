import TodoTypes from './TodoTypes'

const TodoModule = {
  state: {
    todoList: [],
    todo: {
      id: -1,
      value: '',
      description: '',
      deadline: '',
      status: 'unfinished',
      availability: false
    }
  },
  mutations: {
    [TodoTypes.ADD_TODO] (state, todo) {
      state.todoList.push(todo)
    },
    [TodoTypes.EDIT_TODO] (state, todo) {
      state.todoList[todo.id] = todo
      state.todoList = Object.assign([], state.todoList)
    },
    [TodoTypes.DELETE_TODO] (state, todo) {
      const deleteTodo = todo
      const _todoList = state.todoList

      const getIndex = (value, arr, prop) => {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i][prop] === value) {
            return i
          }
        }
        return -1
      }
      const deleteIndex = getIndex(deleteTodo.id, state.todoList, 'id')
      _todoList.splice(deleteIndex, 1)
    }
  },
  actions: {
    [TodoTypes.ADD_TODO] ({ commit, state }, todo) {
      todo.id =
        state.todoList.length > 0
          ? state.todoList[state.todoList.length - 1].id + 1
          : 0
      commit(TodoTypes.ADD_TODO, Object.assign({}, todo))
    },
    [TodoTypes.EDIT_TODO] ({ commit, state }, todo) {
      commit(TodoTypes.EDIT_TODO, Object.assign({}, todo))
    },
    [TodoTypes.DELETE_TODO] ({ commit, state }, todo) {
      commit(TodoTypes.DELETE_TODO, Object.assign({}, todo))
    }
  },
  getters: {
    getInputTodo: state => state.todo,
    getTodoList: state => state.todoList
  }
}
export default TodoModule
