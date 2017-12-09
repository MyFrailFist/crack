import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOutTranslate} from "../../../../../shared/elements/animation";
import { EditAnnctService } from "../shared/edit-annct.service";
import { AuthService } from "../../../../../core/auth.service";
import { UserService } from "../../../../../services/user.service";
import { Announcement } from "../shared/announcement";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ShareSelectedAnnctService } from "../shared/share-selected-annct.service";


@Component({
  selector: 'app-edit-annct',
  templateUrl: './edit-annct.component.html',
  animations: [fadeInOutTranslate],
})
export class EditAnnctComponent implements OnInit {

  private listOfAnnct: Announcement[] = [];
  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: "Content"
  };

  private htmlContent;
  private title;
  private scope;


  constructor(
   private editAnnctSvc: EditAnnctService,
   private userSvc: UserService,
   private firebaseAuth : AuthService,
   private router: Router,
   private route: ActivatedRoute,
   private shareSelectedAnnct : ShareSelectedAnnctService
   ) { }

  private userId: string = this.firebaseAuth.authState.uid;
  private user;
  selectedAnnct : Announcement


  ngOnInit() {
    this.selectedAnnct = this.shareSelectedAnnct.getAnnct()
    this.userSvc.getUser(this.userId).subscribe(userInfo => this.user = userInfo);
    this.editorContent = this.selectedAnnct.content;
      //console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    // this.user.address.estate = "wonderLand";
    // this.user.address.unit = "111-11";
    // this.user.address.block = "123";

    // console.log(this.user);


  }

  onAnnctSubmit(annctForm: NgForm) {
    this.title = annctForm.value.title
    this.editAnnctSvc.editAnnct(this.selectedAnnct, this.htmlContent, this.title)
    this.router.navigate([`../${this.selectedAnnct.scope}`], { relativeTo : this.route })
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