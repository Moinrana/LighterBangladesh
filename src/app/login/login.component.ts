import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fBuilder: FormBuilder) {
    this.loginForm = this.fBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log);
  }

}
