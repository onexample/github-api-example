import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepositoriesModule } from './main/repositories/repositories.module';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule } from '@angular/material';
import { NavigationModule } from './navigation/navigation.module';
import { DataTableModule } from './main/data-table/data-table.module';
import { environment } from "../environments/environment";
import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NavigationModule,
        RepositoriesModule,
        DataTableModule,
        MatToolbarModule,
        MatButtonModule,
        BrowserModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
        environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
    ],
    providers: [ ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

    constructor(
        private update: SwUpdate,
        private push: SwPush
    ){


        this.update.activated.subscribe(e =>console.log('activated:' ,e));
        this.update.available.subscribe(e =>console.log('available', e));

        this.push.messages.subscribe(m => console.log('message', m));


    }
}
