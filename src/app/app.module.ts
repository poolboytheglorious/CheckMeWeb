import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent, HomeDialogComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaterialModule } from './material';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EngineersComponent, EngineersDialogComponent } from './engineers/engineers.component';
import { HistoryComponent } from './history/history.component';
import { SiteComponent, SiteDialogComponent } from './site/site.component';
import { EngineerComponent } from './engineer/engineer.component';
import { DataService } from './data.service';


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
    SiteDialogComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  entryComponents: [
    EngineersDialogComponent,
    HomeDialogComponent,
    SiteDialogComponent
  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
