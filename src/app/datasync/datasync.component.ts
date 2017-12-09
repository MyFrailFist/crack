import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-datasync',
  templateUrl: './datasync.component.html',
  styleUrls: ['./datasync.component.css']
})

// @Injectable()
// export class DataService {
//   private messageSource = new BehaviorSubject<string>("default message");
//   currentMessage = this.messageSource.asObservable();
//   constructor() { }
//   changeMessage(message: string) {
//     this.messageSource.next(message)
//   }
// }


export class DatasyncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
