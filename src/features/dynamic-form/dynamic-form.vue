<script lang="ts">
// Store
import useExampleDynamicFormStore from '@/stores/examples/dynamic-form/dynamic-form.store'

export default {
  name: 'DynamicForm',
  setup () {
    // Store
    const store = useExampleDynamicFormStore()

    // Return
    return {
      store
    }
  }
}
</script>

<template lang="pug">
.form-wrapper
  // Field
  .field-wrapper(
    v-for="(field, key) in store.getFieldsCollection"
    :key="`field-${ key}-key`"
  )
    label(:for="field.id") {{ field.name }}
    input(
      :id="field.id"
      :type="field.type"
      :name="field.name"
      v-model="store.fieldsValues[field.id]"
    )
</template>

<style lang="stylus" scoped>
.form-wrapper
  width 100%
  gap 12px
  display grid
  grid-template-columns 1fr
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
      &:focus
        border-color var(--color-primary)
      // # Disabled
      &[disabled]
        background-color var(--color-border)
  // Adaptive
  // 475px
  @media screen and (min-width 475px)
    grid-template-columns repeat(2, 1fr)
  // 768px
  @media screen and (min-width 768px)
    grid-template-columns repeat(3, 1fr)
  // 980px
  @media screen and (min-width 980px)
    grid-template-columns repeat(4, 1fr)
  // 1080px
  @media screen and (min-width 1080px)
    grid-template-columns repeat(5, 1fr)
</style>
