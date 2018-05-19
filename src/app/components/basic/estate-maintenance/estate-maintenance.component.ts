import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgFor } from '@angular/common';

import {IOption} from "ng-select";
import {SelectOptionService} from "../../../shared/elements/select-option.service";
import {Report} from "../../../model/report";
import {ReportService} from "../../../services/report.service";
import {UserService} from "../../../services/user.service"
import {AuthService} from "../../../core/auth.service";

@Component({
  selector: 'app-maintenance',
  templateUrl: './estate-maintenance.component.html',
  styleUrls: ['./estate-maintenance.component.css']
})
export class EstateMaintenanceComponent implements OnInit {


	public reportsList;


	public reportObject;
	
	public userKey;

	public reportForm;

	//model;

	faultOptions: Array<IOption> = [
        {value: 'Sales and Business', label: 'Sales and Business'},
        {value: 'IT', label: 'IT'},
        // {value: 'HR', label: 'HR'},
        // {value: 'Welfare', label: 'Welfare'},
        // {value: 'Marketing', label: 'Marketing'},
        {value: 'Marketing', label: 'Marketing'}];

	priorityOptions: Array<IOption> = [{value:'high', label: 'High'}, {value:'medium',label:'Medium'},{value:'low',label:'Low'}];
    
    isDisabled: boolean = true;


  constructor(public selectOptionService: SelectOptionService, public db: ReportService, public userService: UserService, public auth: AuthService) { }



  ngOnInit() {
  	this.userKey = this.auth.authState.uid;
  	//just to initialise the reportForm for dual binding 
  	this.reportForm = {
  		"useruid" : this.userKey,
  		"details": null,
  		"faultType": null,
  		"priority" : null,
  		"resident":null,
  		"phoneNumber":null,
  		"date":null,
      "uid": null,
      "name": null,
      "masterSkills":null

  	}

  	//finding the for reports 

    //  this.reportsList = [{"faultType":"leakage","details":"My carpet is wet because of the leakage","date":"12/12/12"},{"faultType":"leakage","details":"My carpet is wet because of the leakage","date":"12/12/12"},{"faultType":"leakage","details":"My carpet is wet because of the leakage","date":"12/12/12"}];

    this.db.retrieveReportsList("useruid",this.userKey).subscribe(snapshot=>{
      console.log('let this wrok' + snapshot);
      this.reportsList=snapshot;
    });

  }



  submitReport(formData: FormData){
  	console.log(formData);
  	//formData.uid = this.auth.authState.uid;
  	this.db.addReport(formData);
  	this.ngOnInit();
  }

  onClickMe(){
    console.log("done")
  }

  deleteThis(reportName: string){
    console.log('deleting report of UID: '+ reportName);
    var reports = 'webfwbef'
    this.db.deleteReport(reportName);
    this.ngOnInit();

  }


  submitForm(){console.log("hello")}

}
