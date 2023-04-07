<script lang="ts">
import { RouterView } from 'vue-router'

export default {
  name: 'RootApp',
  components: {
    RouterView
  }
}
</script>

<template lang="pug">
.app-container
  // Header
  // @TODO-Y: Move to component.
  header
    router-link.link(to="/" active-class="active" exact) Home
    router-link.link(to="/about" active-class="active") About
  // Content
  router-view
</template>

<style lang="stylus" scoped>
.app-container
  width 100%
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  // Header
  header
    max-width 1080px
    width 100%
    min-height 80px
    gap 12px
    margin 0 auto
    display flex
    flex-direction row
    justify-content center
    align-items center
    .link
      color var(--color-text)
      &:hover,
      &.active
        color var(--color-primary)
</style>
