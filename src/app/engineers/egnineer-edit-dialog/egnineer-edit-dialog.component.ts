import { Component, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { DataService } from '../../data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogData } from '../engineer-list/engineer-list.component';
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

  constructor(
    public dialogRef: MatDialogRef<EgnineerEditDialogComponent>,
    private fb: FormBuilder,
    private store: Store<fromEngineer.AppState>
    ) {}

    ngOnInit() {
      this.engineerForm = this.fb.group({
        Name: ['', Validators.required],
        LastName: [''],
        PhoneNumber: ['', Validators.required],
        Country: ['', Validators.required],
        Company: ['', Validators.required],
        id: null
      });

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
          console.log(currentEngineer);
        }
      });
      console.log(engineer$, 'engineer');

    }

    updateEngineer() {
      const updatedEngineer: Engineer = {
        Name: this.engineerForm.get('Name').value,
        LastName: this.engineerForm.get('Last Name').value,
        Company: this.engineerForm.get('Phone Number').value,
        Country: this.engineerForm.get('Name').value,
        PhoneNumber: this.engineerForm.get('Name').value,
        id: null,
        Registered: null
      };
      console.log(updatedEngineer);
      this.store.dispatch(new engineerActions.UpdateEngineer(updatedEngineer));

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
