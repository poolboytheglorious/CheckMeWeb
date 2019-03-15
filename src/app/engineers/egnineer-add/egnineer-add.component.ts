import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Engineer } from '../../root-store/models/engineer.model';
import * as engineerActions from '../../root-store/actions/engineer.actions';
import * as fromEngineer from '../../root-store/reducers/engineer.reducer';


@Component({
  selector: 'app-egnineer-add',
  templateUrl: './egnineer-add.component.html',
  styleUrls: ['./egnineer-add.component.css']
})
export class EgnineerAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EgnineerAddComponent>,
    private fb: FormBuilder,
    private store: Store<fromEngineer.AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  engineerAddForm: FormGroup;

  ngOnInit() {
    this.engineerAddForm = this.fb.group({
      id: [''],
      Registered: [''],
      Name: ['', Validators.required],
      LastName: [''],
      PhoneNumber: ['', Validators.required],
      Country: ['', Validators.required],
      Company: ['', Validators.required]
    });
  }

  createEngineer() {
    const newEngineer: Engineer = {
      Name: this.engineerAddForm.get('Name').value,
      LastName: this.engineerAddForm.get('LastName').value,
      PhoneNumber: this.engineerAddForm.get('PhoneNumber').value,
      Country: this.engineerAddForm.get('Country').value,
      Company: this.engineerAddForm.get('Company').value,
      id: null,
      Registered: null
    };
    console.log(newEngineer, 'new engineer');
    this.store.dispatch(new engineerActions.CreateEngineer(newEngineer));
    this.engineerAddForm.reset();
    this.store.dispatch(new engineerActions.LoadEngineers());

  }

  // Name = new FormControl ('');
  // PhoneNumber = new FormControl ('');
  // Company = new FormControl ('');
  // Country = new FormControl ('');

  // getErrorMessage() {
  //   return this.Name.hasError('required') ? 'You must enter a name' :
  //     this.PhoneNumber.hasError('required') ? 'You must enter a number' :
  //       this.Company.hasError('required') ? 'You must enter a company' : '';
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

