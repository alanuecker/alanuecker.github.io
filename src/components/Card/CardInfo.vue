<template>
  <div class="card-info">
    <card-text :text="title"></card-text>
    <card-text :text="year"></card-text>
  </div>
</template>

<script>
import CardText from '@/components/Card/CardInfoText'
export default {
  name: 'card',
  components: {
    CardText
  },
  props: {
    title: String,
    year: String
  }
}
</script>

<style scoped>
.card-info {
  display: flex;
  flex: 1 1 auto;
  padding: 16px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.38);
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 0;
}
</style>