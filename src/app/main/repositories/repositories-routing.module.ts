import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories.component';

export const REPOSITORIES_ROUTES: Routes = [
    {
        path: 'repositories',
        component: RepositoriesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(REPOSITORIES_ROUTES)],
    exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
