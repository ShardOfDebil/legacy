import {Component, Input, OnInit} from '@angular/core';
import {GameCard} from "../../app/app.service";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input()
  public data!: GameCard;


  constructor() {
  }


  ngOnInit(): void {
  }

}
