import { Component, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as engineerActions from '../../root-store/actions/engineer.actions';
import * as fromEngineer from '../../root-store/reducers/engineer.reducer';
import { Engineer } from 'src/app/root-store/models/engineer.model';

@Component({
  selector: 'app-egnineer-edit-dialog',
  templateUrl: './egnineer-edit-dialog.component.html',
  styleUrls: ['./egnineer-edit-dialog.component.css']
})
export class EgnineerEditDialogComponent implements OnInit {

  engineerForm: FormGroup;
  engineer$: Observable<Engineer>;

  constructor(
    public dialogRef: MatDialogRef<EgnineerEditDialogComponent>,
    private fb: FormBuilder,
    private store: Store<fromEngineer.AppState>
  ) { }

  ngOnInit() {
    this.engineerForm = this.fb.group({
      Name: ['', Validators.required],
      LastName: [''],
      PhoneNumber: ['', Validators.required],
      Country: ['', Validators.required],
      Company: ['', Validators.required],
      id: null
    });

    this.engineer$ = this.store.select(fromEngineer.getCurrentEngineer);

    this.engineer$.subscribe(currentEngineer => {
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
        console.log(currentEngineer, 'current engineer details');
      }
    });

  }

  updateEngineer(engineer: Engineer) {
    console.log('updating engineer');
    const updatedEngineer: Engineer = {
      Name: this.engineerForm.get('Name').value,
      LastName: this.engineerForm.get('LastName').value,
      Company: this.engineerForm.get('Company').value,
      Country: this.engineerForm.get('Country').value,
      PhoneNumber: this.engineerForm.get('PhoneNumber').value,
      id: this.engineerForm.get('id').value,
      Registered: this.engineerForm.get('Registered').value
    };
    console.log(updatedEngineer, 'update information');
    this.store.dispatch(new engineerActions.UpdateEngineer(updatedEngineer));

  }

  deleteEng(id: number) {
    this.store.dispatch(new engineerActions.DeleteEngineer(id));
  }

  getErrorMessage() {
    // return Name.hasError('required') ? 'You must enter a name' :
    //  this.PhoneNumber.hasError('required') ? 'You must enter a number' :
    //  this.Company.hasError('required') ? 'You must enter a company' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
