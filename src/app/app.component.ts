import { Component } from '@angular/core';
import { RepositoryService } from './repositories/repositories.service';

@Component({
    selector: 'app-root',
    template: `
        <mat-toolbar color="primary">
            <span>Repositories</span>
            <span class="fill-remaining-space"></span>
            <button mat-button (click)="showNext()">NEXT</button>
        </mat-toolbar>
        <router-outlet (activate)="onActivate($event)"></router-outlet>        
    `,
    styles: [
        `
            .fill-remaining-space {
                flex: 1 1 auto;
            }
        `
    ]
})
export class AppComponent {

    private _ref;

    constructor(
        private _repositoryService: RepositoryService
    ) { }

    showNext() {

        this._repositoryService
            .getNext()
            .subscribe(res => this._ref.repositories = res )
    }

    onActivate(componentRef){
       this._ref = componentRef;
    }


}
