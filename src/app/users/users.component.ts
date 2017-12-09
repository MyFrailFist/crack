import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: '<router-outlet><spinner></spinner></router-outlet>'
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
