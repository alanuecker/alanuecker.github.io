<template>
  <span class="mui--text-subhead mui--text-light text-overflow">
    {{text}}
  </span>
</template>

<script>

export default {
  name: 'card-text',
  props: {
    text: String
  }
}
</script>
