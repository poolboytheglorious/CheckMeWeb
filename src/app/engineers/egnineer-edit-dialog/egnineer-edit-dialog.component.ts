import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Store } from '@ngrx/store';
import { DialogData } from '../engineer-list/engineer-list.component';

@Component({
  selector: 'app-egnineer-edit-dialog',
  templateUrl: './egnineer-edit-dialog.component.html',
  styleUrls: ['./egnineer-edit-dialog.component.css']
})
export class EgnineerEditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EgnineerEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}


    engineerform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required])
    });


    getErrorMessage() {
      // return this.name.hasError('required') ? 'You must enter a name' :
      //  this.number.hasError('required') ? 'You must enter a number' :
      //  this.company.hasError('required') ? 'You must enter a company' : '';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
