<script lang="ts">
// Components
import UiInputField from '@shared/ui/input-field/input-field.vue'
// Store
import useExampleDynamicFormStore from '@/stores/examples/dynamic-form/dynamic-form.store'

export default {
  name: 'DynamicForm',
  components: { UiInputField },
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
  ui-input-field(
    v-for="(field, key) in store.getFieldsCollection"
    :key="`field-${ key}-key`"

    :label="field.label"
    :placeholder="field.placeholder"

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
