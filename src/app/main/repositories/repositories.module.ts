import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatButtonModule } from '@angular/material'
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoriesComponent } from './repositories.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryService } from './repositories.service';
import { API_URL } from './repositories.config';

@NgModule({
    imports: [
        MatListModule,
        MatButtonModule,
        CommonModule,
        HttpClientModule,
        RepositoriesRoutingModule
    ],
    declarations: [
        RepositoriesComponent
    ],
    providers: [
        RepositoryService,
        {
            provide: API_URL,
            useValue: 'https://api.github.com/repositories'
        }
    ]
})
export class RepositoriesModule { }
