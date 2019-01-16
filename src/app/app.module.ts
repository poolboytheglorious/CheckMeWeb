import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent, HomeDialogComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MaterialModule} from './material';

import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EngineersComponent, EngineersDialogComponent } from './engineers/engineers.component';
import { HistoryComponent } from './history/history.component';
import { SiteComponent } from './site/site.component';
import { EngineerComponent } from './engineer/engineer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    EngineersComponent,
    HistoryComponent,
    SiteComponent,
    EngineerComponent,
    EngineersDialogComponent,
    HomeDialogComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
  ],
  entryComponents: [
    EngineersDialogComponent,
    HomeDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
