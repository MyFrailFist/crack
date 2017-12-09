import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOutTranslate} from "../../../shared/elements/animation";

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  animations: [fadeInOutTranslate]
})
export class ApplianceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
