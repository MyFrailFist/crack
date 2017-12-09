import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Announcement } from "./announcement";
import { User } from "../../../../../model/user";

import * as firebase from "firebase";

@Injectable()
export class PostAnnctService {

  private announceToPost: Announcement;

  constructor(private db: AngularFireDatabase) { }

  postAnnounce (user: User, title: string, html: string, scope: string, adminUser?: User) {
    if(adminUser != undefined){
      this.announceToPost = new Announcement(title, html, adminUser.$key, adminUser.name, adminUser.address, scope)
    } else if(adminUser == undefined){
      this.announceToPost = new Announcement(title, html, user.$key, user.name, user.address, scope)
    }

    //set date of announcement 
    this.announceToPost.date = firebase.database.ServerValue.TIMESTAMP
  	
    //Set block/property announcement to unapproved if user is not an property admin
    if(["property","block"].indexOf(this.announceToPost.scope) > -1 && user.propertyManager !== true){
      this.announceToPost.approved = false;
    }

  	if(scope === "property"){
      let dbRef = this.db.list(`announcements/${user.address.estate}/broadcast/`);
      this.bindingAnnct(user, dbRef);
  	} else if(scope === "block"){
      let dbRef = this.db.list(`announcements/${user.address.estate}/${user.address.block}/broadcast/`);
      this.bindingAnnct(user, dbRef);
  	} else if(scope === "unit"){
      let dbRef = this.db.list(`announcements/${user.address.estate}/${user.address.block}/${user.address.unit}/broadcast/`);
      this.bindingAnnct(user, dbRef);
  	} else if(scope === "personal"){
      let dbRef = this.db.list(`announcements/${user.address.estate}/${user.address.block}/${user.address.unit}/personal/${user.$key}/`);
      this.bindingAnnct(user, dbRef);
  	}
  }
  //Creating a link between the 2 twin announcements and post them.
  private bindingAnnct(user: User, dbRef: FirebaseListObservable<any[]>) {
    var keyToOtherAnnct = dbRef.push(this.announceToPost).key

    var dbRefToUserAnnct = this.db.list(`announcements/${user.address.estate}/userAnnct/`);
    var keyToUserAnnct = dbRefToUserAnnct.push(this.announceToPost).key

    dbRef.update(keyToOtherAnnct, { refToUserAnnct : keyToUserAnnct, refToOtherAnnct : keyToOtherAnnct })
    dbRefToUserAnnct.update(keyToUserAnnct, { refToUserAnnct : keyToUserAnnct, refToOtherAnnct : keyToOtherAnnct })

  }
}
