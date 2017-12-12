import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { PostAnnctService } from "./post-annct.service";
import { UserService } from "../../../../../services/user.service";
import { Announcement } from "./announcement";
// import { User } from "../../../../../model/user";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders} from "@angular/common/http";

// import * as firebase from "firebase";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class EditAnnctService {

  constructor(private http: HttpClient, private postAnnctSvc: PostAnnctService, private userSvc: UserService) { }

  private deleteFromDb(annct: Announcement){
  // 	if(annct.scope === "property"){
	 //  	let propAnnctToDelete = this.db.object(`announcements/${annct.address.estate}/broadcast/${annct.refToOtherAnnct}`)
	 //  	propAnnctToDelete.remove()
	 //  } else if(annct.scope === "block"){
	 //  	let blockAnnctToDelete = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/broadcast/${annct.refToOtherAnnct}`)
	 //  	blockAnnctToDelete.remove()
	 //  }
	 //  let deleteFromUserAnnct = this.db.object(`announcements/${annct.address.estate}/userAnnct/${annct.refToUserAnnct}`)
	 //  deleteFromUserAnnct.remove()
   var jsonAnnouncement = JSON.stringify(annct);
   this.http.post("/api/announcement/delete", jsonAnnouncement, httpOptions)
     .subscribe()
  }

  deleteAnnct(annct: Announcement, reasonForm?: NgForm): boolean{ 
      if(reasonForm == undefined){
      	//To trigger modal appearance
        return false

      } else if(reasonForm != undefined){
        this.deleteFromDb(annct);
        let reason = reasonForm.value.reason;
        let reasonTitle = `Your announcement "${annct.title}" has been deleted/disapproved.`
        //search for the user who posted the annct. And notfy him/her
        // this.userSvc.getUser(annct.userId).subscribe(userInfo => 
        //   this.postAnnctSvc.postAnnounce(userInfo, reasonTitle, reason, "personal", user)
        //   );
        // console.log("gfdgfd")
        return true
      }
    }



  editAnnct(annct: Announcement, html: string, title: string){
    annct.content = html;
    annct.title = title.concat("(Edited)");
    annct.date = new Date();
    var jsonAnnouncement = JSON.stringify(annct);
    this.http.post("/api/announcement/update", jsonAnnouncement, httpOptions)
      .subscribe();
  	// if(annct.scope === "property"){
  	// 	let oldPropAnnct = this.db.object(`announcements/${annct.address.estate}/broadcast/${annct.refToOtherAnnct}`)
  	// 	oldPropAnnct.update(annct)
  	// } else if(annct.scope === "block"){
   //    let oldBlockAnnct = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/broadcast/${annct.refToOtherAnnct}`)
   //    oldBlockAnnct.update(annct)
  	// } else if(annct.scope === "unit"){
   //    let oldUnitAnnct = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/${annct.address.unit}/broadcast/`)
   //    oldUnitAnnct.update(annct)
   //  } else if(annct.scope === "personal"){
   //    let oldPersonAnnct = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/${annct.address.unit}/personal/${annct.userId}`)
   //    oldPersonAnnct.update(annct)
   //  }
   //  let oldUserAnnct = this.db.list(`announcements/${annct.address.estate}/userAnnct/`)
   //  oldUserAnnct.update(annct.refToUserAnnct, annct)
  }

  // approveAnnct(annct: Announcement){
  //   if(annct.scope === "property"){
  //     let annctToApprove = this.db.object(`announcements/${annct.address.estate}/broadcast/${annct.refToOtherAnnct}`)
  //     annctToApprove.update({ approved : true })
  //   } else if(annct.scope === "block"){
  //     let annctToApprove = this.db.object(`announcements/${annct.address.estate}/${annct.address.block}/broadcast/${annct.refToOtherAnnct})`)
  //     annctToApprove.update({ approved : true })
  //   }
  //   let userAnnctToApprove = this.db.object(`announcements/${annct.address.estate}/broadcast/${annct.refToUserAnnct}`)
  //   userAnnctToApprove.update({ approved : true });
  // }
}

