import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';
import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [
        MatListModule,
        CommonModule
    ],
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule { }
