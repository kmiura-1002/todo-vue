import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoPage from '@/components/todo/TodoPage'
import Store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/todo',
      name: 'Todo',
      component: TodoPage,
      meta: { requiresAuth: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (localStorage.getItem('jwt') && Store.getters.isSignin) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
