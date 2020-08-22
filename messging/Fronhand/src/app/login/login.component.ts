import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registerform: any;
  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.registerform = new FormGroup({
      email: new FormControl(''),
      pwd: new FormControl(''),
    });
  }
  onSubmit() {
    this.auth.loginUser(this.registerform.value);
    console.log(this.registerform.value);
  }
}
