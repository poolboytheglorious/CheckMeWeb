import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {EngineersComponent} from './engineers/engineers.component';
import {HistoryComponent} from './history/history.component';
import {SiteComponent} from './site/site.component';

const routes: Routes = [
// individual routes
{path: '', component : HomeComponent},
{path: 'contact', component : ContactComponent},
{path: 'engineers', component : EngineersComponent},
{path: 'history', component : HistoryComponent},
{path: 'site', component : SiteComponent},


// adding URL parameters to the link
// {path: 'contact/:(name of the parameter)', component : ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
