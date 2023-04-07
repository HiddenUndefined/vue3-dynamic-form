<script lang="ts">
// Store
import useExampleDynamicFormStore from '@/stores/examples/dynamic-form/dynamic-form.store'
// Components
import DynamicFormDemo from '@widgets/dynamic-form-demo/dynamic-form-demo.vue'

export default {
  name: 'HomePage',
  components: { DynamicFormDemo },
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
.home
  dynamic-form-demo
</template>
