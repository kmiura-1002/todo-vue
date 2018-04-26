<template>
    <div>
        <Nav></Nav>
        <div class='container'>
            <slot></slot>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './FooterTemplate'
import Nav from './NavTemplate'

export default {
  components: {
    Footer,
    Nav
  },
  name: 'page-template'
}
</script>
