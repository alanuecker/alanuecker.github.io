<template>
  <div class="start">
    <entry msg="test"></entry>
  </div>
</template>

<script>
import Entry from '@/components/Entry'

export default {
  name: 'start',
  components: {
    Entry
  },
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>
