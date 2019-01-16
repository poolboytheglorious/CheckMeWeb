import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';


export interface DialogData {
  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;

}

@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.css']
})

export class EngineersComponent implements OnInit, OnDestroy {

  private req: any;

  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;

  engineer: object;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EngineersDialogComponent, {
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
      console.log(this.name);
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
    this.http.post('delete.php', { 'idEngineers' : engineerId } );
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

  ngOnInit() {
    this.req = this.http.get('assets/json/engineers.json').subscribe(data => {
        this.engineer = data;
        console.log(this.engineer);
        }
    );
  }

  ngOnDestroy() {
  this.req.unsubscribe();
  }

}

@Component({
  selector: 'app-engineers-dialog',
  templateUrl: 'engineers-dialog.html',
  styleUrls: ['./engineers.dialog.css']
})
export class EngineersDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EngineersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    name = new FormControl('', [Validators.required]);
    number = new FormControl('', [Validators.required]);
    company = new FormControl('', [Validators.required]);


    getErrorMessage() {
      return this.name.hasError('required') ? 'You must enter a name' :
       this.number.hasError('required') ? 'You must enter a number' :
       this.company.hasError('required') ? 'You must enter a company' : '';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
