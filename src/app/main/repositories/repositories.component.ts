import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Repository } from './repositories';
import { RepositoryService } from './repositories.service';

@Component({
    moduleId: module.id,
    selector: 'repositories',
    templateUrl: 'repositories.component.html',
    styleUrls: ['repositories.component.scss'],
    encapsulation: ViewEncapsulation.None
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

    showNext() {

        this._repositoryService
            .getNext()
            .subscribe(res => this.repositories = res )
    }


}
