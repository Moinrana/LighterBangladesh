import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fBuilder: FormBuilder) {
    this.loginForm = this.fBuilder.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
        , Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')
      ]]
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
   

}
