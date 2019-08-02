import { AbstractControl } from '@angular/forms';

export class NumericValidator {
  static numeric(control: AbstractControl) {
    const val = control.value;

    if (!val) {
      return null;
    }

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
      return { invalidNumber: true };
    }

    return null;
  }

  static positive(control: AbstractControl) {
    const val = Number(control.value);

    if (val > 0) {
      return null;
    } else {
      return { numberIsNotPositive: true };
    }
  }
}
