import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RepositoriesModule,
        MatToolbarModule,
        MatButtonModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
