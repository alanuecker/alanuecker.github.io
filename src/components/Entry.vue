<template>
  <div class="entry">
    <div class="section hero">
      <div class="container">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entry',
  props: {
    msg: String
  }
}
</script>
