import {  Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;
  site: string;
  engineer: string;


  visit: Object;
  working = false;


  constructor(
  private dataService: DataService,
  private http: HttpClient,
  public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      disableClose: true,
      width: '400px',
      data: {
        site: this.site,
        engineer: this.engineer,
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

  ngOnInit() {
      this.http.get('assets/json/visits.json').subscribe(data => {
      this.visit = data;
      }
  );
  }
  getTicket() {
    // fetch ITSM INC/PKE associated with SPNAID
  }
  editEntry() {
// edit visit details
  }

  toggleActive() {
// toggle activation
  }

}



@Component({
  selector: 'app-home-dialog',
  templateUrl: 'home-dialog.html',
  styleUrls: ['./home.dialog.css']
})
export class HomeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dataService: DataService
    ) {}

    site = new FormControl('', [Validators.required]);
    number = new FormControl('', [Validators.required]);
    reason = new FormControl('', [Validators.required]);

    onSubmit() {
      if (this.dataService.form.get('$key').value == null)

    }

    getErrorMessage() {
      return this.site.hasError('required') ? 'You must enter a site' :
       this.number.hasError('required') ? 'You must enter a number' :
       this.reason.hasError('required') ? 'You must select a reason' : '';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
export interface DialogData {
  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;
  site: string;
  engineer: string;

}
