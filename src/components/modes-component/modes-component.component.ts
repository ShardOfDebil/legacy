import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modes-component',
  templateUrl: './modes-component.component.html',
  styleUrls: ['./modes-component.component.scss']
})
export class ModesComponentComponent implements OnInit {

  @Input()
  public modes: string[] = [];

  public allModes: string[] = ['Singleplayer', 'Multiplayer', 'Co-Op'];
  constructor() { }

  ngOnInit(): void {
  }

}
