<script lang="ts">
export default {
  name: 'UiInputField',
  props: {
    modelValue: {
      type: [String, Number],
      required: false,
      default: null
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<template lang="pug">
.field-wrapper
  // Label
  label(v-if="label" :for="id") {{ label }}
  // Input
  input(
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"

    :disabled="disabled"
    :readonly="readonly"

    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  )
</template>

<style lang="stylus" scoped>
// Field
.field-wrapper
  width 100%
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  // Label
  label
    font-size 14px
    font-weight 500
    line-height 1
    text-align left
    padding 4px 12px
    color var(--color-text)
    cursor pointer
  // Input
  input
    width 100%
    min-height 48px
    max-height 48px
    height 100%
    padding 4px 12px
    color var(--color-text)
    background-color var(--color-background)
    border 1px solid var(--color-border)
    outline none
    // Attr
    // # Focus
    &::placeholder
      color var(--color-text)
      opacity 0.5
    // # Focus
    &:focus
      border-color var(--color-primary)
    // # Disabled
    &[disabled]
      background-color var(--color-border)
</style>
