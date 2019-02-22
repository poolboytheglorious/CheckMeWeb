import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineerComponent } from './engineer/engineer.component';
import { EgnineerAddComponent } from './egnineer-add/egnineer-add.component';
import { EgnineerEditDialogComponent } from './egnineer-edit-dialog/egnineer-edit-dialog.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';

const engineerRoutes: Routes = [
  {path: '',           component : EngineerListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(engineerRoutes)
  ],
  exports: [RouterModule]
})
export class EngineersRoutingModule { }
