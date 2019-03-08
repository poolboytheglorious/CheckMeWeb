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
    }); }

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

  openAddDialog(): void {
    const dialogRef = this.dialog.open(EgnineerAddComponent, {
      disableClose: true,
      width: '300px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.Engineer.Name = result.Name ;
    });
  }

  editEngineer(engineer: Engineer) {
    this.store.dispatch(new engineerActions.LoadEngineer(engineer.id));
    this.openEditDialog(engineer);
  }

    openEditDialog({Name, LastName, PhoneNumber, Company, Country}: Engineer) {
    const dialogRef = this.dialog.open(EgnineerEditDialogComponent, {
      disableClose: true,
      width: '300px',
      data: {
        Name, LastName, PhoneNumber, Company, Country
      }
    });
  }


}

@Component({
  selector: 'app-engineer-list-dialog',
  templateUrl: 'engineer-list-dialog.html',
  styleUrls: ['./engineer-list.dialog.css']
})


export class EngineerListDialogComponent implements OnInit {

  engineerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EngineerListDialogComponent>,
    public dialog: MatDialog,
    private store: Store<fromEngineer.AppState>,
    private fb: FormBuilder
  ) {}


    ngOnInit() {
      
    }


    createEngineer() {
      const newEngineer: Engineer = {
        Name: this.engineerForm.get('Name').value,
        LastName: this.engineerForm.get('Lastame').value,
        PhoneNumber: this.engineerForm.get('PhoneNumber').value,
        Country: this.engineerForm.get('Country').value,
        Company: this.engineerForm.get('Company').value,
        id: null,
        Registered: null
      };
      console.log(newEngineer, 'new engineer');
      this.store.dispatch(new engineerActions.CreateEngineer(newEngineer));
      this.engineerForm.reset();
    }

    getErrorMessage() {
      // return this.name.hasError('required') ? 'You must enter a name' :
      //  this.number.hasError('required') ? 'You must enter a number' :
      //  this.company.hasError('required') ? 'You must enter a company' : '';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
