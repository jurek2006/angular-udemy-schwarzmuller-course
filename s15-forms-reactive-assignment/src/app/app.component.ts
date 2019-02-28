import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom.validators';

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
        [
          Validators.required,
          CustomValidators.invalidProjectName.bind(
            this,
            this.forbiddenProjectNames
          )
        ],
        CustomValidators.invalidProjectNameAsync.bind(this, ['TestAsync'])
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(this.statuses[2])
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    // this.projectForm.reset();
  }
}
