import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.forbiddenNamesAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(this.statuses[2])
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    // this.projectForm.reset();
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenNamesAsync = (
    control: FormControl
  ): Promise<any> | Observable<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.includes(control.value)) {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  };
}
