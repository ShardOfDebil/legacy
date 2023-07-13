import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-score-component',
  templateUrl: './score-component.component.html',
  styleUrls: ['./score-component.component.scss']
})
export class ScoreComponentComponent implements OnInit {

  @Input()
  public score: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
