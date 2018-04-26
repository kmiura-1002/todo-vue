<template>
    <div>
        <form class="form-signin text-center" v-on:submit.prevent="login">
            <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
            <label for="id" class="sr-only">Email address</label>
            <input type="email" v-model="id" id="id" class="form-control" placeholder="Email address" required="" autofocus/>
            <label for="pass" class="sr-only">Password</label>
            <input type="password"  v-model="pass" id="pass" class="form-control" placeholder="Password" required="" />
            <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
    </div>
</template>
<script>
import LoginTypes from '../store/modules/LoginTypes'
import { mapGetters } from 'vuex'
export default {
  name: 'login',
  methods: {
    login (e) {
      const user = {
        id: this.id,
        pass: this.pass
      }
      this.pass = ''
      this.$store.dispatch(LoginTypes.SIGNIN, user)
    }
  },
  computed: {
    ...mapGetters(['isSignin', 'getErrorMessage'])
  },
  watch: {
    isSignin: function (val) {
      if (val) {
        this.$router.push('/todo')
      }
    },
    getErrorMessage: function (val) {
      this.errorMessage = val
    }
  },
  data () {
    return {
      id: '',
      pass: '',
      errorMessage: ''
    }
  }
}
</script>

<style scoped>
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
