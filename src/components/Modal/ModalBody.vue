<template>
  <div class="modal-body">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'modal-body'
}
</script>

<style scoped>
.modal-body {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  padding: 24px;
}
</style>
