<template>
  <div class="card" :style="{'background-image':'url(' + src + ')'}">
    <div>
      <span>{{title}}</span>
      <span>{{year}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    title: String,
    year: String,
    src: String
  }
}
</script>

<style scoped>
  .card {
    background-size: cover;
    background-position: center;
  }
</style>