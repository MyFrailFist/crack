import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOutTranslate} from "../../../../../shared/elements/animation";
import { PostAnnctService } from "../shared/post-annct.service";
import { AuthService } from "../../../../../core/auth.service";
import { UserService } from "../../../../../services/user.service";
import { Announcement } from "../shared/announcement";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-create-annct',
  templateUrl: './create-annct.component.html',
  animations: [fadeInOutTranslate],
})
export class CreateAnnctComponent implements OnInit {

  private listOfAnnct: Announcement[] = [];
  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: "Content"
  };

  private htmlContent;
  private title;
  private scope;


  constructor(private postAnnctSvc: PostAnnctService,
   private userSvc: UserService,
   private firebaseAuth : AuthService,
   private router: Router,
   private route: ActivatedRoute) { }

  private userId: string = this.firebaseAuth.authState.uid;
  private user;


  ngOnInit() {
    this.userSvc.getUser(this.userId).subscribe(userInfo => this.user = userInfo);
    setTimeout(() => {
      this.editorContent = this.editorContent;
      //console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);
    // this.user.address.estate = "wonderLand";
    // this.user.address.unit = "111-11";
    // this.user.address.block = "123";

    // console.log(this.user);


  }

  onAnnctSubmit(annctForm: NgForm) {
    this.title = annctForm.value.title
    this.scope = annctForm.value.scope
    this.postAnnctSvc.postAnnounce(this.user, this.title, this.htmlContent, this.scope)
    this.router.navigate([`../`], { relativeTo : this.route });
  }

  

  onEditorBlured(quill) {
    //console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    //console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
   //console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
   // console.log('quill content is changed!', quill, html, text);
   this.htmlContent = html
  }

}