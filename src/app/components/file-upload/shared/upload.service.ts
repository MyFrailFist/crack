import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { AuthService } from "../../../core/auth.service";
import { Upload } from "./upload";

import { environment } from "../../../../environments/environment";


import * as firebase from "firebase";
import "rxjs/add/operator/first";
import "rxjs/add/operator/toPromise";

// firebase.initializeApp(environment.firebase);
 
@Injectable()
export class UploadService {

  private userID: string = this.firebaseAuth.authState.uid;
  //12ffs3czxczxc

  private basePath: string = this.userID;
  userFolder : FirebaseObjectObservable<Upload>;
  uploads : FirebaseListObservable<Upload[]>;

  private retrievedRecords: string[] = [];

  uploadingProgress: Upload[] = [];


  constructor(private db: AngularFireDatabase, private firebaseAuth : AuthService) {}

  pushUpload(upload: Upload){
  	let storageRef = firebase.storage().ref();
  	let uploadTask = storageRef.child(`fileLibrary/${this.basePath}/${upload.file.name}`).put(upload.file);
    this.uploadingProgress.push(upload);
    
  	uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  		(snapshot) => {
  			upload.progress = Math.ceil((uploadTask.snapshot.bytesTransferred/uploadTask.snapshot.totalBytes) * 100)
  		},
  		(error) => {
  			console.log(error);
  		},
  		() => {
  			upload.url = uploadTask.snapshot.downloadURL;
  			this.saveFileData(upload);
        
  		}
  		);
  }

  private saveFileData(upload: Upload) {
      this.getData()
        .then(data => {
          //Using promise to get data ensures this run smoothly and delete duplicated records BEFORE upload record is pushed.
          this.delDuplicateRecord(upload, data)
          this.db.list(`fileLibrary/${this.basePath}/`).push(upload)
        })
        //Reload after saving record to database. Using promise as premature reload will cause the data to be not saved.
      
      
    //push record to database after all others currentFile are set to false
    
	}

  private getData(): Promise<Upload[]> {
    return this.db.list(`fileLibrary/${this.basePath}/`)
            .first()
            .toPromise()
  }

  private delDuplicateRecord(upload: Upload, dataList: Upload[]) {//Get the right user folder
    // let userFolder: Upload[] = [];
    // dataList.forEach(listRecords => { //Get user dataList
    //   userFolder = listRecords; 
    // }) 
    dataList.forEach(rec => { //Get individual records under user dataList
      if (upload.name == rec.name){
      //Demote old records with same file name, allowing new record to be the currentFile
      this.db.object(`fileLibrary/${this.basePath}/`+ rec.$key).remove()
      }
    })
  }


  deleteUpload(upload: Upload){
      this.deleteStorageFile(upload.nameRefToStorage)  	
  	.then( () => {
      this.deleteFileData(upload.$key)
  	})
  	.catch(error => console.log(error))
  }

  private deleteFileData(key: string){
  	this.db.object(`fileLibrary/${this.basePath}/${key}`).remove()
  }
  private deleteStorageFile(name: string){
  	let storageRef = firebase.storage().ref();
  	return storageRef.child(`fileLibrary/${this.basePath}/${name}`).delete();
  }
   
  renameUpload(upload: Upload, newName: string){
    this.db.object(`fileLibrary/${this.basePath}/${upload.$key}`).update({name: newName});
  }

  // resetFileLibDb(){
  //   this.db.list(`fileLibrary/${this.basePath}/`).remove()
  // }

}
