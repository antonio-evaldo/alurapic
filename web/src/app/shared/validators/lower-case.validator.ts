import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
  
  const regex = /^[a-z0-9_\-]+$/;

  if (control.value.trim() && !regex.test(control.value)) {
    return { lowerCase: true }
  }

  return null;
}