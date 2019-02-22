import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material';
// import { RouterModule, Routes } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EngineerReducer } from '../root-store/reducers/engineer.reducer';



import { EngineersRoutingModule} from './engineers-routing.module';
import { EngineerComponent } from './engineer/engineer.component';
// import { EgnineerAddComponent } from './egnineer-add/egnineer-add.component';
import { EgnineerEditDialogComponent } from './egnineer-edit-dialog/egnineer-edit-dialog.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import {  EngineerListDialogComponent } from './engineer-list/engineer-list.component';


@NgModule({
  declarations: [
    // EgnineerAddComponent,
    // EgnineerEditComponent,
    EngineerComponent,
    EngineerListComponent,
    EngineerListDialogComponent,
    EgnineerEditDialogComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MaterialModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    EngineersRoutingModule,
    StoreModule.forFeature('engineers', EngineerReducer),
    // RouterModule
  ],


  entryComponents: [
    EngineerListDialogComponent,
  ],
})
export class EngineersModule { }
