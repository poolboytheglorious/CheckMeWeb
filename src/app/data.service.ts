import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { stringify } from 'querystring';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, pipe, observable } from 'rxjs';
import { Visit } from './root-store/models/visit.model';
import { Engineer } from './root-store/models/engineer.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {

visits$ = new BehaviorSubject<Visit[]>([]);
private engineersUrl = 'http://localhost/sqltest/getEngineers.php';
private engineerUrl = 'http://localhost/sqltest/getEngineer.php';
private createEngineersUrl = 'http://localhost/sqltest/createEngineer.php';

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


  getEngineers() {
    console.log(this.engineersUrl);
    return this.http.get<Engineer[]>(this.engineersUrl);
  }

  getEngineerById(payload: number): Observable<Engineer> {
    console.log(`${this.engineersUrl}?id=${payload}`);
    return this.http.get<Engineer>(`${this.engineerUrl}?id=${payload}`);
  }

  createEngineer(payload: Engineer): Observable<Engineer> {
    console.log(
      payload.Name,
      payload.LastName,
      payload.PhoneNumber,
      payload.Country,
      payload.Company,
      'engineer details'
    );
    console.log(
      `${this.createEngineersUrl}?
      Name=${payload.Name}
      &LastName=${payload.LastName}
      &PhoneNumber=${payload.PhoneNumber}
      &Country=${payload.Country}
      &Company=${payload.Company}
      `,
    );


    return this.http.post<Engineer>(`${this.createEngineersUrl}?
    Name=${payload.Name}
    &LastName=${payload.LastName}
    &PhoneNumber=${payload.PhoneNumber}
    &Country=${payload.Country}
    &Company=${payload.Company}
    `, payload);
  }

  updateEngineer(engineer: Engineer): Observable<Engineer> {
    return this.http.patch<Engineer>(
      `${this.engineersUrl}/${engineer.id}`,
      engineer
    );
  }

  deleteEngineer(payload: number) {
    return this.http.delete(`${this.engineersUrl}/${payload}`);
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
