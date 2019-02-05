import {  Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  visits: any;
  visit: object;



  constructor(private data: DataService, private http: HttpClient) { }

  users: object;

  ngOnInit() {
    this.visits = this.http.get('http://localhost/sqltest/getactivevisits.php').subscribe(data => {
        this.visit = data;
        }
    );
  }


}
