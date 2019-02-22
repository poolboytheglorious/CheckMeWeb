import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent, HomeDialogComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { SiteComponent, SiteDialogComponent } from './site/site.component';
import { DataService } from './data.service';
import { VisitsComponent } from './visits/visits.component';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaterialModule } from './material';
import { StoreModule } from '@ngrx/store';
import { visitReducer } from './root-store/reducers/visit.reducer';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './root-store/state/root-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    HistoryComponent,
    SiteComponent,
    HomeDialogComponent,
    SiteDialogComponent,
    VisitsComponent
     ],


  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({
      visit: visitReducer
    }),
    AppRoutingModule
  ],

  entryComponents: [
    HomeDialogComponent,
    SiteDialogComponent
  ],

  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
