import { Injectable } from '@angular/core';
import { Announcement } from "./announcement";

@Injectable()
export class ShareSelectedAnnctService {

  constructor() { }

  private selectedAnnct: Announcement;

  storeAnnct (annct : Announcement){
  	this.selectedAnnct = annct
  }

  getAnnct(){
  	return this.selectedAnnct;
  }
}
