import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EgnineerEditDialogComponent } from '../egnineer-edit-dialog/egnineer-edit-dialog.component';
import { Engineer } from '../../root-store/models/engineer.model';
import * as engineerActions from '../../root-store/actions/engineer.actions';
import * as fromEngineer from '../../root-store/reducers/engineer.reducer';



export interface DialogData {
  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;

}

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})

export class EngineerListComponent implements OnInit {

  engineers$: Observable<Engineer[]>;

  private req: any;

  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;

  constructor(private http: HttpClient, public dialog: MatDialog, private store: Store<fromEngineer.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new engineerActions.LoadEngineers());
    this.engineers$ = this.store.pipe(select(fromEngineer.getEngineers));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EngineerListDialogComponent, {
      disableClose: true,
      width: '300px',
      data: {
        name: this.name,
        lastname: this.lastname,
        phonenumber: this.phonenumber,
        country: this.country,
        company: this.company,
        }
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      console.log(result);
      console.log(result);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EgnineerEditDialogComponent, {
      disableClose: true,
      width: '300px',
      data: {
        name: this.name,
        lastname: this.lastname,
        phonenumber: this.phonenumber,
        country: this.country,
        company: this.company,
        }
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      console.log(result);
      console.log(result);
    });
  }


  addEngineer() {
  }

  insertdata () {
    this.http.post('insert.php', {'name': this.name, 'lastname': this.lastname, 'phonenumber' : this.phonenumber,
    'country' : this.country, 'company': this.company } );
    this.displayEngineer();
  }

  displayEngineer() {
    return this.http.get('getengineers.php');
  }

  deleteEngineer (engineerId) {
    this.http.post('delete.php', { 'id' : engineerId } );
    this.displayEngineer();
  }

  editEngineer (name, lastname, phonenumber, country, company) {
    this.name = name;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.country = country;
    this.company = company;
    this.displayEngineer();
  }



  // ngOnInit() {
  //   this.req = this.http.get('http://localhost/sqltest/getengineers.php').subscribe(data => {
  //   // this.req = this.http.get('assets/json/engineers.json').subscribe(data => {
  //       this.engineer = data;
  //       }
  //   );
  // }

  // ngOnDestroy() {
  // this.req.unsubscribe();
  // }

}

@Component({
  selector: 'app-engineer-list-dialog',
  templateUrl: 'engineer-list-dialog.html',
  styleUrls: ['./engineer-list.dialog.css']
})
export class EngineerListDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EngineerListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


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
