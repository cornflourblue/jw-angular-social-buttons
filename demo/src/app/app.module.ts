import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HomeComponent } from './home';
import { TestPageComponent } from './test-page';

// import social buttons module
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

@NgModule({
    imports: [
        BrowserModule,
        routing,

        // add social buttons module to NgModule imports
        JwSocialButtonsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TestPageComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }