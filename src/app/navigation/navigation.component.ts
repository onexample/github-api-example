import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit{

    public routes: Routes = [];

    @Output('nav')
    public _navEmitter = new EventEmitter<any>();

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {

        this.routes = this.router
            .config
            .map(({path}) => ({path}))
            .filter(r => r.path != null && r.path !='' && r.path != undefined);
    }

    goToRoute(route) {
        this._navEmitter.emit(route);
        this.router.navigate([route.path]);
    }

}
