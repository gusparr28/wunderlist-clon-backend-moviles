import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  @ViewChild(FormComponent) formComponent: FormComponent;

  public signInForm: any = [
    { id: 'email', placeholder: 'Email' },
    { id: 'password', placeholder: 'Password: 6-64 characters' }
  ]

  public submitData = {};

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.formComponent.formData['email'] = '';
    this.formComponent.formData['password'] = '';
  }

  public postData(data) {
    this.submitData = data;
    // calling service here
    this._router.navigate(['/home/tasks']);
  }

}
