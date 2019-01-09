import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EngineersComponent } from './engineers/engineers.component';
import { HistoryComponent } from './history/history.component';
import { SiteComponent } from './site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    EngineersComponent,
    HistoryComponent,
    SiteComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
