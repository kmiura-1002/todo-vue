<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link to="/todo" class="navbar-brand">Todo</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"></li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link btn btn-link" v-on:click="signout">Signout<span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import LoginTypes from '../../store/modules/LoginTypes'
export default {
  name: 'nav-template',
  methods: {
    ...mapActions([LoginTypes.SIGNOUT])
  },
  computed: {
    ...mapGetters(['isSignin'])
  },
  watch: {
    isSignin: function (val) {
      console.log(`issignin? ${val}`)
      if (!val || !localStorage.getItem('jwt')) {
        this.signout()
        this.$router.push('/login')
      }
    }
  }
}
</script>
