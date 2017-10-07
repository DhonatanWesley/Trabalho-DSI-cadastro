import { Component, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  public alertMe(): void {

    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
