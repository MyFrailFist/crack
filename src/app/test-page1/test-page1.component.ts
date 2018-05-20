import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {}

  	
  

  
}


