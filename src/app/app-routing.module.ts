import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { HistoryComponent } from './history/history.component';

import { SiteComponent } from './site/site.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [

{path: 'engineers',      loadChildren: './engineers/engineers.module#EngineersModule'},
{path: '',               component : HomeComponent},
{path: 'contact',        component : ContactComponent},
{path: 'history',        component : HistoryComponent},
{path: 'site/:spanid',   component : SiteComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    ),

    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
