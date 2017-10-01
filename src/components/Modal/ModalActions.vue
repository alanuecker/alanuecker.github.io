<template>
  <div class="modal-actions">
    <button @click="close">Close</button>
  </div>
</template>

<script>

export default {
  name: 'modal-actions',
  props: {
    close: Function
  }
}
</script>

<style scoped>
.modal-actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
}
</style>
