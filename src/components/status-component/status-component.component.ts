import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.scss']
})
export class StatusComponentComponent implements OnInit {

  @Input()
  public status: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
