<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonCallback: {
    type: Function,
    required: true
  }
})
</script>

<template lang="pug">
.page-info
  // Title
  h2 {{ title }}
  // Info
  p {{ info }}
  // Button
  button(@click.prevent="buttonCallback()") {{ buttonText }}
</template>

<style lang="stylus" scoped>
</style>
