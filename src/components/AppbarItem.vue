<template>
  <a class="appbar-item mui--appbar-height mui--text-light" v-bind:href="href">{{text}}</a>
</template>

<script>
  export default {
    name: 'appbar-item',
    props: {
      text: String,
      href: String
    }
  }
</script>

<style scoped>
  a {
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    padding: 0 16px;
    text-decoration: none;
    cursor: pointer;
  }
</style>

