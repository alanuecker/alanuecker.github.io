<template>
  <div class="start">
    <appbar></appbar>
    <div class="mui-container">
      <div class="row">
        <card class="col-3" src="/static/test.jpeg" title="test" year="2017"></card>
        <card class="col-3" src="/static/test.jpeg" title="test" year="2017"></card>
        <card class="col-3" src="/static/test.jpeg" title="test" year="2017"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Appbar from '@/components/Appbar'
import Card from '@/components/Card'

export default {
  name: 'start',
  components: {
    Appbar,
    Card
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-3 {
  display: flex;
  flex: 1 1 33%;
}

@media (max-width: 840px) {
  .col-3 {
    flex: 1 1 50%;
  }
}

@media (max-width: 480px) {
  .col-3 {
    flex: 1 1 100%;
  }
}
</style>

