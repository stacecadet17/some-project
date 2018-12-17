import { User } from './user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { Observable } from "rxjs";


@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user: User){
    return this._http.post("/users", user)
    .map(data => data.json()).toPromise()
  }

  destroy(user: User){
    console.log(user);
    console.log(user._id);
    return this._http.delete("/users/"+user._id)
    .map(data => data.json()).toPromise()
  }

  update(user: User){
    //returns an http request to put new user info to the passed user
    return this._http.put("/users/"+user._id, user)
    //turns all data into json data
    //turn to a promise so that the service can either execute or fail it's callback
    .map(data => data.json()).toPromise()
  }

  getUsers(){
    return this._http.get("/users")
    .map(data => data.json()).toPromise()
  }

  getUser(user: User){
    return this._http.get("/users/"+user._id)
    .map(data => data.json()).toPromise()
  }

}
