<template>
  <div class="card">
    <div class="card-image" :style="{'background-image':'url(' + src + ')'}">
      <card-info :title="title" :year="year"></card-info>
    </div>
  </div>
</template>

<script>
import CardInfo from '@/components/CardInfo'
export default {
  name: 'card',
  components: {
    CardInfo
  },
  props: {
    title: String,
    year: String,
    src: String
  }
}
</script>

<style scoped>
.card {
  display: flex;
  min-height: 256px;
}

.card-image {
  display: flex;
  align-items: flex-end;
  padding: 16px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-clip: content-box;
}
</style>