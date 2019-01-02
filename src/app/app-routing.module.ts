import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
//individual routes 
{path: '', component : HomeComponent},
{path: 'about', component : AboutComponent},
{path: 'contact', component : ContactComponent},

//adding URL parameters to the link
//{path: 'contact/:(name of the parameter)', component : ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
