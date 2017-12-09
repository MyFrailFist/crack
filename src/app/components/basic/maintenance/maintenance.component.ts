import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOutTranslate} from "../../../shared/elements/animation";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  animations: [fadeInOutTranslate]
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
