import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {fadeInOutTranslate} from "../../../shared/elements/animation";
import { ListFileService } from "../shared/list-file.service";
import { UploadService } from "../shared/upload.service";
import { Upload } from "../shared/upload";
import { DatePipe } from "@angular/common";

import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.css'],
  providers: [ ListFileService ]
})
export class ListFileComponent implements OnInit {

  listOfUploads: Upload[];

  //Prevent error
  selectedFile;

  //Modal methods
  openMyModal(event) {
    document.querySelector("#"+event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  constructor( private listFileSvc: ListFileService, private uploadSvc: UploadService) {

  }

  deleteFile(upload: Upload) {
    this.uploadSvc.deleteUpload(upload)
  }

  renameSelectFile(upload: Upload){
    this.selectedFile = upload;
    document.getElementById("modalButton").click();
  }
  renameFile(newNameForm: NgForm){
    var newName = newNameForm.value.newName;
    this.uploadSvc.renameUpload(this.selectedFile, newName)
  }

  dismissModalSubmit(){
   document.getElementById("submitForm").click()
   document.getElementById("closeModal").click()
  }
  
  ngOnInit() {
  	// this.listOfUploads = this.listFileSvc.deliverListOfUploaded()
  	// console.log("hi")
  	this.listFileSvc.fetchData(uploads => {
  	this.listOfUploads = uploads
  })

  }
}
