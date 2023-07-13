import {Component, OnInit} from '@angular/core';
import {AppService, GameCard, GameData} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public games: GameCard[] = [];
  title = 'david-legacy';

  constructor(
    private gameService: AppService
  ) {

  }

  public ngOnInit(): void {
    this.gameService.getGameData().subscribe((data: GameData) => {
      this.games = data.gameCard;
    });
  }
}
