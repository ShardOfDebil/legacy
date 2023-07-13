import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GameCard {
  gameName: string;
  platformName: string[];
  releaseDate: string;
  genre: string;
  developer: string;
  publisher: string;
  description: string;
  modesItWasPlayed: string[];
  score: string;
}

export interface GameData {
  gameCard: GameCard[];
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private dataUrl = 'assets/db.json';

  constructor(private http: HttpClient) { }

  public getGameData(): Observable<GameData> {
    return this.http.get<GameData>(this.dataUrl);
  }
}
