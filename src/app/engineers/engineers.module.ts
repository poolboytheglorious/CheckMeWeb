import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


import { EngineerReducer } from '../root-store/reducers/engineer.reducer';
import { EngineerEffect } from './../root-store/effects/engineer.effects';



import { EngineersRoutingModule} from './engineers-routing.module';
import { EngineerComponent } from './engineer/engineer.component';
import { EgnineerAddComponent } from './egnineer-add/egnineer-add.component';
import { EgnineerEditDialogComponent } from './egnineer-edit-dialog/egnineer-edit-dialog.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { EngineerListDialogComponent } from './engineer-list/engineer-list.component';


@NgModule({
  declarations: [
    EgnineerAddComponent,
    EngineerComponent,
    EngineerListComponent,
    EngineerListDialogComponent,
    EgnineerEditDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EngineersRoutingModule,
    StoreModule.forFeature('engineers', EngineerReducer),
    EffectsModule.forFeature([EngineerEffect]),
    ReactiveFormsModule
  ],


  entryComponents: [
    EngineerListDialogComponent,
    EgnineerEditDialogComponent
  ],
})
export class EngineersModule { }
