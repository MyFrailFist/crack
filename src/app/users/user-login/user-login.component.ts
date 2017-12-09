import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";
import { Router } from "@angular/router";

import { UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public auth: AuthService,
              public userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  private afterSignIn():void {
  	// Do after login stuff here, such router redirects, toast messages, etc.

    // query the db here to check if the user information is filled
    var queryId = this.auth.authState.uid;
    var userObject;
    this.userService.getUser(queryId).subscribe(snap=>{
       userObject = snap;
       console.log(userObject);
       if(!userObject.onBoard){
         console.log("new user !")
         this.router.navigate(['/onboarding']);
       }
       else{
         this.router.navigate(['/dashboard']);
       }
    });
  }

  signInWithGithub(): void {
    this.auth.githubLogin()
    .then(() => this.afterSignIn());
  }
  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }

  signInWithCustom(email: string, password:string): void {
    this.auth.emailLogin(email, password)
      .then(() => this.afterSignIn());
  }

  signInWithFacebook(): void{
    console.log("hello, facebook sign in not available yet")
  }

  signInWithTwitter() :void{
    console.log("hello, twitter sign in not available yet")
  }
}
