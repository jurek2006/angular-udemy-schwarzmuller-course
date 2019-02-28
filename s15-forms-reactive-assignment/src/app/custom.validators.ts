import { FormControl } from '@angular/forms';

export class CustomValidators {
  static invalidProjectName(
    forbiddenValues: string[],
    control: FormControl
  ): { [s: string]: boolean } {
    console.log(forbiddenValues);
    if (forbiddenValues.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
