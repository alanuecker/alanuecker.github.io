<template>
  <div class="card-info">
    <span>{{title}}</span>
    <span>{{year}}</span>
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    title: String,
    year: String
  }
}
</script>

<style scoped>
.card-info {
  display: flex;
  flex: 1 0 auto;
  line-height: 16px;
  padding: 16px;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.38);
  justify-content: space-between;
  font-size: 16px;
}
</style>