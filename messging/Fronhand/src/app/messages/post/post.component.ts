import { ApiService } from './../../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  registerform: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.registerform = new FormGroup({
      msg: new FormControl(''),
    });
  }

  userPost;
  onSubmit() {
    console.log(this.registerform.value);
    this.apiService
      .userPostNewPost(this.registerform.value)
      .subscribe((data) => (this.userPost = data));
  }
}
