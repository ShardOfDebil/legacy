import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponentComponent } from './score-component.component';



@NgModule({
    declarations: [
        ScoreComponentComponent
    ],
    exports: [
        ScoreComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ScoreComponentModule { }
