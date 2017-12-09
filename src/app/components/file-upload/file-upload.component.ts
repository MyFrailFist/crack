import {Component, OnInit} from '@angular/core';
//import {FileUploader} from "ng2-file-upload";
import { Upload } from "./shared/upload";

import { UploadService } from "./shared/upload.service";
import { ListFileService } from "./shared/list-file.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [ UploadService, ListFileService]
})
export class FileUploadComponent implements OnInit {

  pickedFile: FileList;
  uploadingNow: Upload;
  uploadingList: Upload[] = [];

  constructor(private uploadSvc: UploadService) { }

  // detectFile(event){
  //   //console.log this
  //   this.pickedFile = event.target.files;
  // }

  openFileSelect(){
    document.getElementById("uploadInput").click();
  }

  singleUpload(event) {
    //console.log this
    // let file = this.pickedFile.item(0)
    //.item(0) is a DOM method, select the item of index 0
    let file = event.target.files.item(0);
    this.uploadingNow = new Upload(file);
    this.uploadingList.push(this.uploadingNow);
    this.uploadSvc.pushUpload(this.uploadingNow);
    // this.lfs.getUserFolder("12ffs3czxczxc");
  }

  // resetFileLibDb(){
  //   this.uploadSvc.resetFileLibDb();
  // }

  ngOnInit() {
  }

}
