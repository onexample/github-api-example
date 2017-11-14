import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { DataTableRoutingModule } from './data-table-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DataTableRoutingModule
    ],
    declarations: [
        DataTableComponent
    ]
})
export class DataTableModule { }
