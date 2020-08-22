import { ApiService } from './../../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: any[];
  constructor(private apiServices: ApiService) {}

  ngOnInit() {
    this.apiServices.getUser().subscribe((res) => (this.users = res));
  }
}
