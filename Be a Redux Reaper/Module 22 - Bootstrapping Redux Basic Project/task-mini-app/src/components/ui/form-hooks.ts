import * as React from "react"
import { useFormContext } from "react-hook-form"


export function useFormField() {
  const id = React.useId()
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(id, formState)

  if (!fieldState) {
    throw new Error("useFormField should be used within <FormField>")
  }

  return {
    id,
    name: id,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
