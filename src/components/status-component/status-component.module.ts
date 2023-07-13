import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponentComponent } from './status-component.component';



@NgModule({
    declarations: [
        StatusComponentComponent
    ],
    exports: [
        StatusComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StatusComponentModule { }
