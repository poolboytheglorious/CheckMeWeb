import { Component, Inject, OnInit, OnDestroy, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder, Form } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EgnineerEditDialogComponent } from '../egnineer-edit-dialog/egnineer-edit-dialog.component';
import { EgnineerAddComponent } from '../egnineer-add/egnineer-add.component';
import { Engineer } from '../../root-store/models/engineer.model';
import * as engineerActions from '../../root-store/actions/engineer.actions';
import * as fromEngineer from '../../root-store/reducers/engineer.reducer';



@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})

export class EngineerListComponent implements OnInit {

  engineers$: Observable<Engineer[]>;
  error$: Observable<String>;
  engineerForm: FormGroup;

  @Input()
  Engineer: Engineer;


  constructor(
    public dialog: MatDialog,
    private store: Store<fromEngineer.AppState>,
    private fb: FormBuilder,
  ) {
    this.engineerForm = this.fb.group({
      Name: ['', Validators.required],
      LastName: [''],
      PhoneNumber: ['', Validators.required],
      Country: ['', Validators.required],
      Company: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.store.dispatch(new engineerActions.LoadEngineers());
    this.engineers$ = this.store.pipe(select(fromEngineer.getEngineers));
    this.error$ = this.store.pipe(select(fromEngineer.getEngineersError));
    const engineer$: Observable<Engineer> = this.store.select(
      fromEngineer.getCurrentEngineer
    );

    engineer$.subscribe(currentEngineer => {
      if (currentEngineer) {
        this.engineerForm.patchValue({
          Name: currentEngineer.Name,
          LastName: currentEngineer.LastName,
          Company: currentEngineer.Company,
          Country: currentEngineer.Country,
          PhoneNumber: currentEngineer.PhoneNumber,
          Registered: currentEngineer.Registered,
          id: currentEngineer.id,
        });
      }
    });

  }


  addEngineer() {
    const dialogRef = this.dialog.open(EgnineerAddComponent, {
      disableClose: true,
      width: '300px',
      data: {}
    });
  }

  editEngineer(engineer: Engineer) {
    this.store.dispatch(new engineerActions.LoadEngineer(engineer.id));
    this.openEditDialog(engineer);
    console.log(engineer.id, 'selectedEngineersId');
  }

  openEditDialog({ Name, LastName, PhoneNumber, Company, Country }: Engineer) {
    const dialogRef = this.dialog.open(EgnineerEditDialogComponent, {
      disableClose: true,
      width: '300px',
      data: {
        Name, LastName, PhoneNumber, Company, Country
      }
    });
  }


}
