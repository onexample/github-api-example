import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'repositories',
        loadChildren: 'app/main/repositories/repositories.module#RepositoriesModule'
    },
    {
        path: 'data-table',
        loadChildren: 'app/main/data-table/data-table.module#DataTableModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'repositories'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
