export interface Field {
  id: string
  type: string
  name: string
  value?: string
  disabled?: boolean
  required?: boolean
}

export interface FieldValues {
  [key: string]: string | number | boolean | null
}

export interface StateImp {
  fieldsCollection: Field[]
  fieldsValues: FieldValues
}
