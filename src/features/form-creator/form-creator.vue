<script lang="ts">
// Core
import { defineComponent, reactive } from 'vue'
// Components
import UiInputField from '@shared/ui/input-field/input-field.vue'
import UiButton from '@shared/ui/button/button.vue'
// Store
import useExampleDynamicFormStore from '@stores/examples/dynamic-form/dynamic-form.store'

export default defineComponent({
  components: {
    UiButton,
    UiInputField
  },
  setup () {
    // Store
    const store = useExampleDynamicFormStore()

    // Variables
    const formFields = reactive({
      id: null,
      type: null,
      name: null,
      label: null,
      placeholder: null,
      value: null
    })

    // Methods
    /**
     * Create new field in store
     */
    const createNewField = (): void => {
      const {
        id, type, name,
        label, placeholder,
        value
      } = formFields

      // Validation
      if (id && type && name && label && placeholder && value) {
        store.pushNewField({
          id, type, name, label, placeholder, value
        })
      } else {
        alert('Form are invalid!')
      }
    }

    // Return
    return {
      // Variables
      formFields,
      // Methods
      createNewField
    }
  }
})
</script>

<template lang="pug">
.form-wrapper
  // Field: ID
  ui-input-field(id="field-id" v-model="formFields.id" name="id" label="ID" placeholder="Enter id")
  // Field: Type
  ui-input-field(id="field-type" v-model="formFields.type" name="type" label="Type" placeholder="Enter type")
  // Field: Name
  ui-input-field(id="field-name" v-model="formFields.name" name="name" label="Name" placeholder="Enter name")
  // Field: Label
  ui-input-field(id="field-label" v-model="formFields.label" name="label" label="Label" placeholder="Enter label")
  // Field: Placeholder
  ui-input-field(id="field-placeholder" v-model="formFields.placeholder" name="placeholder" label="Placeholder" placeholder="Enter placeholder")
  // Field: Required
  ui-input-field(id="field-required" name="required" label="Required" placeholder="Enter required")
  // Field: Disabled
  ui-input-field(id="field-disabled" name="disabled" label="Disabled" placeholder="Enter disabled")
  // Field: Value
  ui-input-field(id="field-value" v-model="formFields.value" name="value" label="Value" placeholder="Enter value")
  // Button: Submit
  ui-button(@click.native="createNewField()") Create field
</template>

<style lang="stylus" scoped>
.form-wrapper
  width 100%
  gap 12px
  display grid
  grid-template-columns 1fr
  align-items flex-end
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
