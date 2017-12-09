import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOutTranslate} from "../../../../../shared/elements/animation";
import { ListAnnctService } from "../shared/list-annct.service";
import { EditAnnctService } from "../shared/edit-annct.service";
import { AuthService } from "../../../../../core/auth.service";
import { UserService } from "../../../../../services/user.service";
import { Announcement } from "../shared/announcement";
import { DatePipe } from "@angular/common";
import { NgForm } from "@angular/forms";
import { ShareSelectedAnnctService } from "../shared/share-selected-annct.service";
import { Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-annct-personal',
  templateUrl: './personal-annct.component.html',
  animations: [fadeInOutTranslate]
})
export class PersonalAnnctComponent implements OnInit {

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

  user;

  constructor(
    private listAnnctSvc: ListAnnctService,
    private editAnnctSvc: EditAnnctService,
    private userSvc: UserService,
    private firebaseAuth : AuthService,
    private shareSelectAnnct : ShareSelectedAnnctService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
  	var userId: string = this.firebaseAuth.authState.uid;
  	this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo);
  	this.listAnnctSvc.fetchAnnct(
  		 this.user,
		   "personal",
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

  editAnnct(annct: Announcement){
    this.shareSelectAnnct.storeAnnct(annct)
    document.getElementById("closeAnnctButton").click()
    this.router.navigate(["../edit"], { relativeTo : this.route });
  }
}
