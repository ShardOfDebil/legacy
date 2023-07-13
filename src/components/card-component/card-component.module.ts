import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponentComponent} from './card-component.component';
import {HttpClientModule} from "@angular/common/http";
import {PlatformBadgeModule} from "../platform-badge/platform-badge.module";
import {ModesComponentModule} from "../modes-component/modes-component.module";
import {ScoreComponentModule} from "../score-component/score-component.module";
import {StatusComponentModule} from "../status-component/status-component.module";


@NgModule({
  declarations: [
    CardComponentComponent
  ],
  exports: [
    CardComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PlatformBadgeModule,
    ModesComponentModule,
    ScoreComponentModule,
    StatusComponentModule
  ]
})
export class CardComponentModule {
}
