<template>
  <div>
    <div v-for="(str, index) of text.split('\n')" v-bind:key="str+index">{{str}}</div>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
