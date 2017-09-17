<template>
  <div class="mui-appbar">
    <ul>
      <appbar-item text="Projects"></appbar-item>
      <appbar-item text="Work"></appbar-item>
      <appbar-item text="Contacts"></appbar-item>
    </ul>
  </div>
</template>

<script>
  import AppbarItem from '@/components/AppbarItem'

  export default {
    name: 'appbar',
    components: {
      AppbarItem
    }
  }
</script>

<style scoped>

  ul {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
  }
</style>
