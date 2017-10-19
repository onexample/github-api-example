import { Component, OnInit } from '@angular/core';
import { Repository } from './repositories';
import { RepositoryService } from './repositories.service';

@Component({
    moduleId: module.id,
    selector: 'repositories',
    template: `
        <mat-list>
            <mat-list-item *ngFor="let repo of repositories">
                <h3 matLine> {{repo.name}} </h3>
                <p matLine>{{repo.description}}</p>
                <a mat-button [href]="repo.html_url" target="_blank">VIEW</a>
            </mat-list-item>
        </mat-list>
    `
})
export class RepositoriesComponent implements OnInit{

    public repositories: Repository[] = [];

    constructor(
        private _repositoryService: RepositoryService
    ) { }

    ngOnInit(): void {
        this._repositoryService
            .getAll()
            .subscribe(res => this.repositories = res)
    }


}
