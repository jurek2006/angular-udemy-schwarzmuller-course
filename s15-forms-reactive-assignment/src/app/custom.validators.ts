import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

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

  static invalidProjectNameAsync = (
    forbiddenValues: string[],
    control: FormControl
  ): Promise<any> | Observable<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (forbiddenValues.includes(control.value)) {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  };
}
