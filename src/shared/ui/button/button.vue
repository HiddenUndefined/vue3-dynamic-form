<script>
export default {
  name: 'UiButton',
  props: {
    // Attributes
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    // Color
    colored: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<template lang="pug">
button(
  :class="{ colored: colored }"
  :disabled="disabled"
)
  slot
</template>

<style lang="stylus" scoped>
button
  width 100%
  min-height 48px
  max-height 48px
  height 100%
  font-size 14px
  font-weight 600
  line-height 1
  padding 4px 12px
  color var(--color-text)
  background-color var(--color-border)
  border 1px solid var(--color-border)
  display flex
  justify-content center
  align-items center
  outline none
  cursor pointer
  transition all .5s ease
  // Color
  &.colored
    // @TODO: Think about color
  // Attr
  // # Disabled
  &[disabled]
    background-color var(--color-border)
  // State
  // # Focus
  &:focus
    border-color var(--color-primary)
  // # Hover
  &:hover
    color var(--color-text-reverse)
    background-color var(--color-primary)
    border-color var(--color-primary)
</style>
