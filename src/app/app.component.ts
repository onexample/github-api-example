import { Component } from '@angular/core';
import { RepositoryService } from './main/repositories/repositories.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <mat-sidenav-container >
            <mat-sidenav #sidenav mode="push">
                <navigation (nav)="sidenav.close()"></navigation>
            </mat-sidenav>
            <mat-toolbar color="primary">
                <button type="button" mat-button (click)="sidenav.toggle()">MENU</button>
                <span>Repositories</span>
                <span class="fill-remaining-space"></span>
                <button mat-button (click)="showNext()">NEXT</button>
            </mat-toolbar>
            <router-outlet (activate)="onActivate($event)"></router-outlet>
        </mat-sidenav-container>        
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
        private _repositoryService: RepositoryService,
        private _router: Router
    ) {

        this._router.events.subscribe(event =>{
            console.log(event)
        })
    }

    showNext() {

        this._repositoryService
            .getNext()
            .subscribe(res => this._ref.repositories = res )
    }

    onActivate(componentRef){
       this._ref = componentRef;
    }


}
