import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModesComponentComponent } from './modes-component.component';



@NgModule({
    declarations: [
        ModesComponentComponent
    ],
    exports: [
        ModesComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ModesComponentModule { }
