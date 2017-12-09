import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOutTranslate} from "../../../../../shared/elements/animation";
import { ListAnnctService } from "../shared/list-annct.service";
import { PostAnnctService } from "../shared/post-annct.service";
import { EditAnnctService } from "../shared/edit-annct.service";
import { AuthService } from "../../../../../core/auth.service";
import { UserService } from "../../../../../services/user.service";
import { Announcement } from "../shared/announcement";
import { DatePipe } from "@angular/common";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-annct-approve',
  templateUrl: './approve-annct.component.html',
  animations: [fadeInOutTranslate],
})
export class ApproveAnnctComponent implements OnInit {

  listOfAnnct: Announcement[] = [];
 //PRevent error
 private dummyAnnct = {
    $key: null,
    refToUserAnnct: null,
    refToOtherAnnct: null,
    title: "placeholder",
    content: "placeholder",
    date: null,
    scope: "placeholder",
    address: null,
    userId: null,
    userName: null,
    approved: null
  }
  selectedAnnct = this.dummyAnnct;

  private user;

  constructor(
    private listAnnctSvc: ListAnnctService,
    private postAnnctSvc: PostAnnctService,
    private editAnnctSvc: EditAnnctService,
    private userSvc: UserService,
    private firebaseAuth : AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  	var userId: string = this.firebaseAuth.authState.uid;
  	this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
    //Stop people from entering this page.
    if(this.user.propertyManager !== true){
      alert("You cannot enter this page!")
      this.router.navigate(["../"], { relativeTo : this.route })
    }

  	this.listAnnctSvc.fetchAnnct(
  		  this.user,
		    "unapproved",
		  fetchedAnnct => { this.listOfAnnct = fetchedAnnct.reverse() } )
  		//Once this.listOfAnnct is updated, ngFor should list out all the announcements through observable.
  }

  viewAnnct(annct: Announcement){
    this.selectedAnnct = annct;
    document.getElementsByClassName("overflow-container").item(0).innerHTML = this.selectedAnnct.content
    document.getElementById("modalButton").click()
  }

  deleteAnnct(annct: Announcement, reasonForm?: NgForm){
    //When true is returned, annct is deleted, else, annct is not
    var result = this.editAnnctSvc.deleteAnnct(this.user, annct, reasonForm)
    if(result === true){
      document.getElementById("closeAnnctButton").click()
      document.getElementById("reasonModalBody").innerHTML = "<h1>Announcement Deleted</h1>";
      document.getElementById("submitReasonButton").style.display = "none";
    } else if(result === false){
      document.getElementById("reasonModalButton").click()
    }

   }

  submitReason(){
     document.getElementById("submitReason").click()
  }

  approveAnnct(annct : Announcement){
     this.editAnnctSvc.approveAnnct(annct);
     document.getElementById("closeAnnctButton").click()
   }
}
