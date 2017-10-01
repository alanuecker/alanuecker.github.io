<template>
  <div class="modal-header">
    <span class="title">
      {{title}}
    </span>
  </div>
</template>

<script>

export default {
  name: 'modal-header',
  props: {
    title: String
  }
}
</script>

<style scoped>
.modal-header {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
}

.title {
  padding: 24px;
}
</style>
