import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'park-accordian',
  templateUrl: './park-accordian.component.html',
  styleUrls: ['./park-accordian.component.css']
})
export class ParkAccordianComponent implements OnInit {

  @ViewChild('myaccordion', {static : true}) accordion: any;

  constructor() { }

  ngOnInit(): void {
  }

  // beforeChange($event: NgbPanelChangeEvent) {
  //   console.log($event.panelId);
  //   if ($event.panelId === 'panelOne') {
  //     $event.preventDefault();
  //   }

  //   if ($event.panelId === 'panelTwo' && $event.nextState === false) {
  //     $event.preventDefault();
  //   }
  // }

  togglePanel(id: any){
    this.accordion.toggle(id);
  }

}
