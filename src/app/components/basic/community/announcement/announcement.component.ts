import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOutTranslate} from "../../../../shared/elements/animation";
import { AuthService } from "../../../../core/auth.service";
import { UserService } from "../../../../services/user.service";
import { Announcement } from "./shared/announcement";


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  animations: [fadeInOutTranslate]
})
export class AnnouncementComponent implements OnInit {
 
  annctTypeSelected = "Property";

  Announcement: Announcement;

  user;

  constructor(
  	private userSvc: UserService,
    private firebaseAuth : AuthService
    ){}

  ngOnInit() {
  	var userId: string = this.firebaseAuth.authState.uid;
  	this.userSvc.getUser(userId).subscribe(userInfo => this.user = userInfo)
  }

  setAnnctType(type: string){
  	this.annctTypeSelected = type;
  }

}
