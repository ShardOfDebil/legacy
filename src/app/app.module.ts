import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CardComponentModule} from "../components/card-component/card-component.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CardComponentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
