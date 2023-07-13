import {Component, Input, OnInit} from '@angular/core';
import {GameCard} from "../../app/app.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input()
  public data!: GameCard;
  public safeDescription!: SafeHtml;


  constructor(
    private sanitizer: DomSanitizer
  ) {
  }


  ngOnInit(): void {
    let descriptionHtml = this.data.description.replace(/([\n\u2028])/g, '<br/>');
    this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(descriptionHtml);
  }

}
