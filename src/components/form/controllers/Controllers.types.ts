import { Control, FieldValues, Path } from 'react-hook-form'

export interface CommonControllerProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  error?: string
  onChange?: (value: unknown) => void
}
