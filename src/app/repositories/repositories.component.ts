import { Component, OnInit } from '@angular/core';
import { Repository } from './repositories';
import { RepositoryService } from './repositories.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';

@Component({
    moduleId: module.id,
    selector: 'repositories',
    template: `
        <mat-list>
            <mat-list-item *ngFor="let repo of repositories">
                <h3 matLine> {{repo.name}} </h3>
                <p matLine>{{repo.description}}</p>
                <a mat-button *ngIf="repo.fork" [href]="repo.parent.html_url" target="_blank">PARENT</a>
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
            .mergeMap(
                repos => Observable.forkJoin(
                    repos.map(
                        repo => repo.fork ?
                        this._repositoryService.getById(repo.id) :
                        Observable.of(repo)
                    )
                )
            )
            .subscribe(res => this.repositories = res)
    }


}
