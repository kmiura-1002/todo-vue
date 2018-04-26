import LoginTypes from './LoginTypes'

const TodoModule = {
  state: {
    auth: {
      isSignin: false,
      user: {
        id: '',
        name: ''
      },
      error: ''
    }
  },
  mutations: {
    [LoginTypes.SIGNIN] (state, auth) {
      state.auth = Object.assign({}, auth)
    },
    [LoginTypes.SIGNOUT] (state) {
      state.auth = {
        isSignin: false,
        user: {
          id: '',
          name: ''
        },
        error: ''
      }
    }
  },
  actions: {
    [LoginTypes.SIGNIN] ({ commit, state }, user) {
      // 認証OKとする
      const jwt = 'jsonWebToken'
      localStorage.setItem('jwt', jwt)
      const auth = {}
      auth.isSignin = true
      auth.user = {}
      auth.user.id = user.id
      commit(LoginTypes.SIGNIN, Object.assign({}, auth))
    },
    [LoginTypes.SIGNOUT] ({ commit, state }, auth) {
      localStorage.removeItem('jwt')
      commit(LoginTypes.SIGNOUT)
    }
  },
  getters: {
    getAuthUser: state => state.auth,
    isSignin: state => state.auth.isSignin,
    getErrorMessage: state => state.auth.error
  }
}
export default TodoModule
