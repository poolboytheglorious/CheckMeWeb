import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { stringify } from 'querystring';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, pipe, observable } from 'rxjs';
import { Visit } from './root-store/models/visit.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {

visits$ = new BehaviorSubject<Visit[]>([]);

  constructor(private http: HttpClient) { }

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

  // getErrorMessage() {
  //   return this.spanid.hasError('required') ? 'You must enter a valid site name' :
  //    this.number.hasError('required') ? 'You must enter a number' :
  //    this.company.hasError('required') ? 'You must enter a company' : '';
  // }


  getActiveVisits() {
    this.http.get<Visit[]>('http://localhost/sqltest/getactivevisits.php').subscribe(visits =>
      this.visits$.next(visits)
      );
      console.log(this.visits$, 'visits');
  }

  insertVisit(payload: Visit): Observable<Visit> {
    return this.http.post<Visit>('', payload).pipe(catchError((error: any) => Observable.throw(error.json())));
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


  getEngineers() {
    return this.http.get('http://localhost/sqltest/presences.php')
    .pipe(map(res => {
      this.resp = res;
      if (this.resp._body !== '0') {
         return this.resp.json();
      }
    }));
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
