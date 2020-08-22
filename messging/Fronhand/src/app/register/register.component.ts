import { AuthService } from './../../service/auth.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData = {};
  registerform: any;

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.registerform = new FormGroup({
      email: new FormControl(''),
      pwd: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }
  UserProfile;
  onSubmit() {
    console.log(this.registerform.value);
    this.auth.sendUserRegistration(this.registerform.value);
    this.registerform.reset();
  }

  reset() {
    this.registerform.reset();
  }
}
