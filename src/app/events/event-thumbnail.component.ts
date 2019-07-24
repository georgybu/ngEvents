import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .green {color: #003300 !important; font-weight: bold;}
    .thumbnail { min-height: 260px;}
    .well div { color: #bbb;}
  `]
})
export class EventThumbnailComponent implements OnInit {

  @Input()
  event: any;

  @Output()
  eventClick = new EventEmitter();

  constructor() { }

  clickFunction() {
    this.eventClick.emit(this.event);
  }

  ngOnInit() {
  }

}
