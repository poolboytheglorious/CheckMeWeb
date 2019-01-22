import { Component, OnInit, Inject, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { SpawnOptions } from 'child_process';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit, OnDestroy {

  constructor(private data: DataService,
    private http: HttpClient,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService
  ) { }

  site: string;
  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;
  engineer: string;

  panelOpenState1 = false;
  panelOpenState11 = false;
  panelOpenState2 = false;
  panelOpenState22 = false;
  panelOpenState3 = false;
  panelOpenState33 = false;

  private routeSub: any;
  public span: string;

   ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.span = params['spanid'];
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SiteDialogComponent, {
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
      console.log(name);
      console.log(result);
      console.log(this.site);
      console.log(this.engineer);
      console.log(this.phonenumber);
      console.log(this.country);
      console.log(this.company);
    });
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

  ngOnDestroy() {
    // this.routeSub.unscubscribe();
  }

}

@Component({
  selector: 'app-site-dialog',
  templateUrl: 'site-dialog.html',
  styleUrls: ['./site.dialog.css']
})
export class SiteDialogComponent {

  @Input() spanFromParent: string;

  constructor(
    public dialogRef: MatDialogRef<SiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    number = new FormControl('', [Validators.required]);
    reason = new FormControl('', [Validators.required]);


    getErrorMessage() {
      return this.number.hasError('required') ? 'You must enter a number' :
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
