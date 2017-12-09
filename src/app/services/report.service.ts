import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Report } from '../model/report';

import { AuthService } from '../core/auth.service';


@Injectable()



export class ReportService {

  private basePath: string = '/reports';
  reports: FirebaseListObservable<Report[]>; //  list of objects
  report: FirebaseObjectObservable<Report>; //   single object
  
  
  constructor(private db: AngularFireDatabase) { }

  public getReports(): FirebaseListObservable<Report[]>{
    const itemPath = `${this.basePath}`;
    this.reports = this.db.list(itemPath);
    this.reports.subscribe(snapshot=>{
      console.log('Snapshot type result: ' + snapshot);
    })
    return this.reports;
  }

  public getReport(uid: string): FirebaseObjectObservable<Report> {
  	const itemPath =  `${this.basePath}/${uid}`;
  	this.report = this.db.object(itemPath);
  	this.report.subscribe(snapshot =>{
  		console.log('Snapshot type result: ' + snapshot);
  	})
  	return this.report;
	}

  public retrieveReportsList(propertyValue: string, userUid: string): FirebaseListObservable<Report[]> {
      this.reports=this.db.list(this.basePath, {
        query: {
          orderByChild:propertyValue,
          equalTo:userUid
        }
      });
      this.reports.subscribe(snapshot=> {
        console.log("snapshot type result:" + snapshot);
      });
      return this.reports;
  }

  public updateReport(reportObject: object):any{
    const itemPath = '${this.basePath}/${uid}';
    this.report.update(reportObject).catch(error=>this.handleError(error));
    return true;
  }

  public addReport(reportObject: object):any{
    const items = this.db.list(`${this.basePath}`);
    items.push(reportObject);
  }


  public deleteReport(uid: string):any{
    const report=this.db.object(`${this.basePath}/${uid}`);
    report.remove();
  }

//from here on, it is for internal circulation of user data

  private reportObject = new BehaviorSubject<object>(this.report);
  currentUser = this.reportObject.asObservable();


  // public getCurrentUserObject(){
  //   const itemPath =  `${this.basePath}/${uid}`;
  //   var userObject;
  //   this.user = this.db.object(itemPath);
  //   this.user.subscribe(snap =>{
  //     userObject = snap;
  //   })
  //   return userObject;
  // }

  private handleError(error:any){
    if(error){console.log("there is an error! ", error)}
  }

  



}