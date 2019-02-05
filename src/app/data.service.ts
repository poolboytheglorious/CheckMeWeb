import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { stringify } from 'querystring';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient,
    ) { }


  visitsList: any;
    resp: any;

  form = new FormGroup({
    spanid: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
    reason2: new FormControl(''),
    reason3: new FormControl(''),
    signin: new FormControl('aivistei'),
    signout: new FormControl('aivistei'),
    comment: new FormControl(''),
    inc: new FormControl(''),
  });

  getErrorMessage() {
    return this.spanid.hasError('required') ? 'You must enter a valid site name' :
     this.number.hasError('required') ? 'You must enter a number' :
     this.company.hasError('required') ? 'You must enter a company' : '';
  }


  getEngineers() {
    return this.http.get('http://localhost/sqltest/presences.php')
    .pipe(map(res => {
      this.resp = res;
      if (this.resp._body !== '0') {
         return this.resp.json();
      }
    }));
  }

  getSiteVisits() {
    return this.http.get('http://localhost/sqltest/getsitevisits.php?spanID={{span}}')
    .pipe(map(res => {
      this.resp = res;
      if (this.resp._body !== '0') {
         return this.resp.json();
      }
    }));
  }

  // editEntry(id) {

  // }



  insertVisit(visit) {
    this.visitsList.push({
      SPANID: visit.SPANID,
      phonenumber: visit.phonenumber,
      reason: visit.reason,
      reason2: visit.reason2,
      reason3: visit.reason3,
      comment: visit.comment,
      inc: visit.inc,
    });
  }

  populateForm(visit) {
    this.form.setValue(visit);
  }

  updateVisit(visit) {
    this.visitsList.update(visit.$key, {
      SPANID: visit.SPANID,
      phonenumber: visit.phonenumber,
      reason: visit.reason,
      reason2: visit.reason2,
      reason3: visit.reason3,
      comment: visit.comment,
      inc: visit.inc,
    });
  }


}
