import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    // new User(1, "First", "Last", "email@email.com"),
    // new User(2, "First", "Last", "email@email.com"),
    // new User(3, "First", "Last", "email@email.com"),
    // new User(4, "First", "Last", "email@email.com"),
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  create(user: User){
    this._userService.create(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));

    this.users.push(user);
  }

  destroy(user: User){
    console.log(user);
    this._userService.destroy(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
  }

  update(user: User){
    console.log(user);
    //takes new user info and sends it through the service
    this._userService.update(user)
    //function will then return all the users
    .then(status => this.getUsers())
    //will catch an error if there is one present
    .catch(err => console.log(err));
  }

  getUsers(){
    this._userService.getUsers()
    .then(users => this.users = users) //redefine users array to be the users here
    .catch(err => console.log(err));
  }

}
