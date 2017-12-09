import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { AuthService } from "../../../core/auth.service";
import { Upload } from "./upload";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import * as firebase from "firebase";

@Injectable()
export class ListFileService {
  
  private userID: string = this.firebaseAuth.authState.uid;
  private fileNameList: Upload[] = [];

  constructor(private db: AngularFireDatabase,private firebaseAuth : AuthService) { }
  uploads : FirebaseListObservable<Upload[]>;

  
  // deliverListOfUploaded(): Upload[]{
  //   var fileNameList: Upload[] = [];
  //   var userFolder: Upload[];
  //   this.uploads = this.db.list(`${this.userID}/`);
  //   this.uploads.forEach(listRecords => { //Get user dataList
  //     userFolder = listRecords;
  //   })
  //   userFolder.forEach(rec => { //Get individual records under user dataList
  //     if (rec.currentFile === true ){
  //       fileNameList.push(rec)
  //     }
  //   })
  //   return fileNameList;
  // }

  // fetchData(): Promise<Upload[]>{
  //   return this.db.list(`fileLibrary/${this.userID}/`)
  //   .map(fetchedUploads => 
  //     fetchedUploads = this.filterData(fetchedUploads)
  //   ) //Reassign the uploadList to a filtered one, showing only currentFiles
  //   .first() //Captures the first item emitted by observable, which is the list of upload records we need
  //   .toPromise(); //Convert the observable created to a promise, resolving with the list of upload records
  //   // return new Promise(resolve => resolve(uploads))
  // }

  // private filterData(uploads: Upload[]): Upload[] {
  //   //var userFolder: Upload[] = []
  //   var fileNameList: Upload[] = []
  //   // uploads.forEach(listRecords => { //Get user dataList
  //   //   userFolder = listRecords;
  //   // })
  //   uploads.forEach(rec => { //Get individual records under user dataList
  //     if (rec.userFileLibraryItem === true ){
  //       fileNameList.push(rec)
  //     }
  //   })
  //   return fileNameList
  // }

  fetchData(exportData: (listOfUpload: Upload[]) => void) {
    this.uploads = this.db.list(`fileLibrary/${this.userID}/`)
    this.uploads.subscribe(
      uploadList => { uploadList.forEach(
        upload => {
         //var index = this.fileNameList.indexOf(upload,0)
         // if (upload.currentFile === true && index === -1) {
         //   this.fileNameList.push(upload)
         })
         exportData(uploadList)
        },
        err => console.log(err)
      )
  }

}
