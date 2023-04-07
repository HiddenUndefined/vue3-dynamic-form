<script>
import { defineComponent } from 'vue'
// Components
import FormCreator from '@features/form-creator/form-creator.vue'
import DynamicForm from '@features/dynamic-form/dynamic-form.vue'

export default defineComponent({
  components: {
    DynamicForm,
    FormCreator
  }
})
</script>

<template lang="pug">
.component
  form-creator
  dynamic-form
</template>

<style lang="stylus" scoped>
.component
  width 100%
  gap 24px
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
</style>
