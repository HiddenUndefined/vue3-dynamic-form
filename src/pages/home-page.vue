<template lang="pug">
.home
  // Form
  form(action="#")
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

<script lang="ts">
// Store
import useExampleDynamicFormStore from '@/stores/examples/dynamic-form/dynamic-form.store'

export default {
  name: 'HomePage',
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
