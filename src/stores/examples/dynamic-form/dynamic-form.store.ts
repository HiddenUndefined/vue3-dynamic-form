import { defineStore } from 'pinia'
// Models
import type { StateImp } from './dynamic-form.models'

const useExampleDynamicFormStore = defineStore({
  id: 'example-dynamic-form',
  state: (): StateImp => ({
    fieldsCollection: [
      {
        id: '1L0e9fI19dwE9cBmBvq',
        type: 'email',
        name: 'email',
        label: 'E-mail',
        placeholder: 'Enter your e-mail',
        value: 'mr.john.doe@email.com'
      },
      {
        id: '9Cu17F0Q1vh5Mmz7ka4G5',
        type: 'text',
        name: 'name',
        label: 'First name',
        placeholder: 'Enter your first name',
        value: 'John'
      }
    ],
    fieldsValues: {
      '1L0e9fI19dwE9cBmBvq': 'mr.john.doe@email.com',
      '9Cu17F0Q1vh5Mmz7ka4G5': 'John'
    }
  }),
  getters: {
    getFieldsCollection: ({ fieldsCollection }) => fieldsCollection
  },
  actions: {}
})

export default useExampleDynamicFormStore
