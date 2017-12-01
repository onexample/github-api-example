import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule
} from '@angular/material';
import { DataTableComponent } from './data-table.component';
import { DataTableRoutingModule } from './data-table-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatSortModule,
        MatTableModule,
        MatExpansionModule,
        MatToolbarModule,
        MatButtonModule,
        MatSlideToggleModule,
        DataTableRoutingModule
    ],
    declarations: [
        DataTableComponent
    ]
})
export class DataTableModule { }
