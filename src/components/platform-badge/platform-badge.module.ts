import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformBadgeComponent } from './platform-badge.component';



@NgModule({
    declarations: [
        PlatformBadgeComponent
    ],
    exports: [
        PlatformBadgeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PlatformBadgeModule { }
