import { JsonPipe } from '@angular/common';
import { ApiService } from './../../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private apiServices: ApiService,
    private acticeRout: ActivatedRoute
  ) {}

  profile;
  ngOnInit() {
    var id = this.acticeRout.snapshot.params.id;
    console.log(id);
    this.apiServices.getUserById(id).subscribe((data) => (this.profile = data));
  }
}
