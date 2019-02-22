import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeoutError, Observable, BehaviorSubject } from 'rxjs';
import { Visit } from '../root-store/models/visit.model';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visits$: Observable<Visit[]>;

  user = 'aivistei';
  visits: any;
  visit: object;
  visitH: object;
  working = false;


  constructor(
  public dataService: DataService,
  private http: HttpClient,
  public dialog: MatDialog,
  ) { }

  openDialog(): void {
    this.dialog.open(HomeDialogComponent, {
      disableClose: true,
      autoFocus: true,
      width: '450px',
      data: this.dataService.form
    });

  }

  ngOnInit() {
    this.visits$ = this.dataService.visits$;
    this.dataService.getActiveVisits();

  //   this.visits = this.http.get('http://localhost/sqltest/getactivevisits.php').subscribe(data => {
  //       this.visit = data;
  //       }
  //   );
  //   this.visits = this.http.get('http://localhost/sqltest/gethistoricvisits.php').subscribe(data => {
  //     this.visitH = data;
  //     }
  // );
  }

  editEntry() {

  }

  getTicket() {
    // fetch ITSM INC/PKE associated with SPNAID
  }

  toggleActive() {
// toggle activation
  }

}


interface SectorNode {
  name: string;
  children?: SectorNode[];
}

const TREE_DATA: SectorNode[] = [
  {
    name: '2G',
    children: [
      {name: 'Sector 1'},
      {name: 'Sector 2'},
      {name: 'Sector 3'},
      {name: 'Sector 4'},

    ]
  },
  {
    name: '3G',
    children: [
      {name: 'Sector 1'},
      {name: 'Sector 2'},
      {name: 'Sector 3'},
      {name: 'Sector 4'},

    ]
  },
  {
    name: '4G',
    children: [
      {name: 'Sector 1'},
      {name: 'Sector 2'},
      {name: 'Sector 3'},
      {name: 'Sector 4'},

    ]
  },

];




@Component({
  selector: 'app-home-dialog',
  templateUrl: 'home-dialog.html',
  styleUrls: ['./home.dialog.css']
})
export class HomeDialogComponent {

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<HomeDialogComponent>,
    ) {
      this.dataSource.data = TREE_DATA;
    }

  submitted: boolean;
  formControls = this.dataService.form.controls;


  treeControl = new NestedTreeControl<SectorNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SectorNode>();

  hasChild = (_: number, node: SectorNode) => !!node.children && node.children.length > 0;




    onSubmit() {
      this.submitted = true;

      if (this.dataService.form.valid) {
        if (this.dataService.form.get('$key').value == null) {
          this.dataService.insertVisit(this.dataService.form.value);
        } else {
            this.submitted = false;
            this.dataService.form.reset();
            this.dataService.form.setValue({
              $key: null,
              SPANID: '',
              phonenumber: '',
              reason: '',
              reason2: '',
              reason3: '',
              signin: '{{user}}',
              signout: '{{user}}',
              inc: ''
            });
          }
      }
    }


    // getErrorMessage() {
    //   return this.spanid.hasError('required') ? 'You must enter a valid site identifier' :
    //    this.phonenumber.hasError('required') ? 'You must enter a valid phone number' :
    //    this.reason.hasError('required') ? 'You must select an action' :
    //    this.reason2.hasError('required') ? 'You must select the equippment' : '';
    // }

  onNoClick(): void {
  this.dialogRef.close();
  }

  getTicket() {
    console.log('getTicket');
  }

}
