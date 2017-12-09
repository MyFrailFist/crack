import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../model/user';

import { AuthService } from '../core/auth.service';


@Injectable()



export class UserService {

  private basePath: string = '/users';
  users: FirebaseListObservable<User[]>; //  list of objects
  user: FirebaseObjectObservable<User>; //   single object
  
  
  constructor(private db: AngularFireDatabase) { }

  public getUser(uid: string): FirebaseObjectObservable<User> {
  	const itemPath =  `${this.basePath}/${uid}`;
  	this.user = this.db.object(itemPath);
  	this.user.subscribe(snapshot =>{
  		console.log('Snapshot type result: ' + snapshot);
  	})
  	return this.user;
	}


  public updateUser(userObject: object):void{
    const itemPath = '${this.basePath}/${uid}';
    this.user.update(userObject).catch(error=>this.handleError(error));

  }


//from here on, it is for internal circulation of user data

  private userObject = new BehaviorSubject<object>(this.user);
  currentUser = this.userObject.asObservable();


  // public getCurrentUserObject(){
  //   const itemPath =  `${this.basePath}/${uid}`;
  //   var userObject;
  //   this.user = this.db.object(itemPath);
  //   this.user.subscribe(snap =>{
  //     userObject = snap;
  //   })
  //   return userObject;
  // }

  private handleError(error:any){
    if(error){console.log("there is an error! ", error)}
  }
}