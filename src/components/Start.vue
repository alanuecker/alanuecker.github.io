<template>
  <div class="start">
    <appbar></appbar>
    <div class="mui-container">
      <div class="mui-row">
        <card class="mui-col-md-4" src="/static/test.jpeg" title="test" year="2017"></card>
        <card class="mui-col-md-4" src="/static/test.jpeg" title="test" year="2017"></card>
        <card class="mui-col-md-4" src="/static/test.jpeg" title="test" year="2017"></card>
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
