import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table.component';

export const DATA_TABLE_ROUTES: Routes = [
    {
        path: 'data-table',
        component: DataTableComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(DATA_TABLE_ROUTES)],
    exports: [RouterModule]
})
export class DataTableRoutingModule { }
