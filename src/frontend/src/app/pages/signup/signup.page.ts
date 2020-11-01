import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  @ViewChild(FormComponent) formComponent: FormComponent;
  
  public signUpForm: any = [
    {id: 'name', placeholder: 'Name'},
    {id: 'email', placeholder: 'Email'},
    {id: 'password', placeholder: 'Password: 6-64 characters'}
  ]

  public submitData = {};
  
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.formComponent.formData['name'] = '';
    this.formComponent.formData['email'] = '';
    this.formComponent.formData['password'] = '';
  }
  
  public postData(data) {
    this.submitData = data;
    this._router.navigate(['/'])
  }
}
