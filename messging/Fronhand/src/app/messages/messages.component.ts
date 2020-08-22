import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  mssage: any[];
  constructor(public api: ApiService, private acticeRout: ActivatedRoute) {}

  ngOnInit() {
    var userid = this.acticeRout.snapshot.params.id;
    console.log('the id ', userid);

    this.api.getMessage(userid).subscribe((res) => (this.mssage = res));
  }
}
