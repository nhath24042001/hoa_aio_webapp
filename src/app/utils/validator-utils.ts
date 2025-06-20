import { FormGroup } from '@angular/forms';

export function isInvalid(fieldName: string, form: FormGroup): boolean {
  const field = form.get(fieldName);
  return !!(field && field.touched && field.invalid);
}
