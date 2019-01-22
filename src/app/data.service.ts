import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ReturnStatement } from '@angular/compiler';
import { stringify } from 'querystring';
import { homedir } from 'os';


// import { mysql } from 'mysql';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // mysql = require('mysql');
  // connection = this.mysql.createConnection( {
  //   host: 'localhost',
  //   user: 'root',
  //   password: ''
  // });


  constructor(
    private http: HttpClient,
    private firebase: AngularFireDatabase
    ) { }
  visitsList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    phonenumber: new FormControl(''),
    lastname: new FormControl(''),
    reason: new FormControl(''),
    reason2: new FormControl(''),
    compreason3: new FormControl(''),
    inc: new FormControl(''),
  });


  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }


  getVisits() {
    this.visitsList = this.firebase.list('visits');
    return this.visitsList.snapshotChanges();
    // return this.http.get('presences.php');
  }
  insertVisit(visit) {
    this.visitsList.push({
      site: visit.site,
      phonenumber: visit.phonenumber,
      reason: visit.reason,
      reason2: visit.reason2,
      reason3: visit.reason3,
      inc: visit.inc,
    });
  }


}
