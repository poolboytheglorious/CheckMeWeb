import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import * as fromEngineer from '../../root-store/reducers/engineer.reducer';
import * as engineerActions from '../../root-store/actions/engineer.actions';
import { Engineer } from '../../root-store/models/engineer.model';



@Component({
  selector: 'app-egnineer-add',
  templateUrl: './egnineer-add.component.html',
  styleUrls: ['./egnineer-add.component.css']
})
export class EgnineerAddComponent implements OnInit {

  engineerForm: FormGroup;
  Engineer: Engineer;

  constructor(
    public dialogRef: MatDialogRef<EgnineerAddComponent>,
    public dialog: MatDialog,
    private store: Store<fromEngineer.AppState>,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.engineerForm = this.fb.group({
      Name: ['', Validators.required],
      LastName: [''],
      PhoneNumber: ['', Validators.required],
      Country: ['', Validators.required],
      Company: ['', Validators.required]
    });
  }

  createEngineer() {
    this.dialogRef.close(this.engineerForm.value);
    const newEngineer: Engineer = {
      Name: this.engineerForm.get('Name').value,
      LastName: this.engineerForm.get('Lastame').value,
      PhoneNumber: this.engineerForm.get('PhoneNumber').value,
      Country: this.engineerForm.get('Country').value,
      Company: this.engineerForm.get('Company').value,
      id: null,
      Registered: null
    };
    console.log(newEngineer, 'New engineer');
    console.log(this.engineerForm.value, 'Add form values');
    this.store.dispatch(new engineerActions.CreateEngineer(newEngineer));
    this.engineerForm.reset();
  }


}

