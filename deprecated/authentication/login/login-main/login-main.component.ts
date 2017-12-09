import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html'
  //,
  //styleUrls: ['./login.component.css']
})
export class LoginMainComponent implements OnInit {

  user = null;
  

  constructor( private router: Router) { 
    
  


  }


   // signInWithTwitter() {
   //    this.authService.signInWithTwitter()
   //    .then((res) => { 
   //        this.router.navigate(['/home/dashboard'])
   //      })
   //    .catch((err) => console.log(err));
   //  }


   //  // signInWithFacebook() {
   //  //   this.authService.signInWithFacebook()
   //  //   .then((res) => { 
   //  //       this.router.navigate(['dashboard'])
   //  //     })
   //  //   .catch((err) => console.log(err));
   //  // }


   //  signInWithGoogle() {
   //    this.authService.signInWithGoogle()
   //    .then((res) => { 
   //        this.router.navigate(['/admin/authentication/login/with-social'])
   //      })
   //    .catch((err) => console.log(err));
   //  }



  ngOnInit() {
  }

}