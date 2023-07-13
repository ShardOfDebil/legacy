import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponentComponent} from './card-component.component';
import {HttpClientModule} from "@angular/common/http";
import {PlatformBadgeModule} from "../platform-badge/platform-badge.module";


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
    PlatformBadgeModule
  ]
})
export class CardComponentModule {
}
