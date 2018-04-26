import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Todo from './modules/Todo'
import Login from './modules/Login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Todo, Login
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
