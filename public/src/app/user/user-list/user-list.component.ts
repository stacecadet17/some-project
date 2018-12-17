import { User } from './../user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() users; //allows us to two way bind with html
//tells angular that we are sending data into this component
@Output() destroyUserEvent = new EventEmitter();
@Output() updateUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  destroy(user: User){
    this.destroyUserEvent.emit(user);
  }

  update(user){
    this.updateUserEvent.emit(user);
  }

}
