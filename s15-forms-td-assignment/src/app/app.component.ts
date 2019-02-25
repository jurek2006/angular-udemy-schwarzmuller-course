import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  subscriptions = [
    { label: 'Basic', value: 'basic' },
    { label: 'Advanced', value: 'advanced' },
    { label: 'Pro', value: 'pro', default: true }
  ];
  // defaultSubscription = this.subscriptions.find(
  //   subscription => subscription.default === true
  // );

  submitted = false;
  userSubscription = {
    email: '',
    password: '',
    subscription: ''
  };

  defaultSubscription() {
    return this.subscriptions.find(
      subscription => subscription.default === true
    ).value;
  }
  onSubmit() {
    const { email, password, subscription } = this.form.value;
    this.userSubscription = { email, password, subscription };
    this.submitted = true;
    this.form.reset({
      subscription: this.defaultSubscription()
    });
    console.log(this.defaultSubscription);
  }
}
