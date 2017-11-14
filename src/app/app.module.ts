import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepositoriesModule } from './main/repositories/repositories.module';
import { MatButtonModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { NavigationModule } from './navigation/navigation.module';
import { DataTableModule } from './main/data-table/data-table.module';

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
        AppRoutingModule
    ],
    providers: [ ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
