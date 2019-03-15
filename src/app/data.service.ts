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
private createEngineerUrl = 'http://localhost/sqltest/createEngineer.php';
private deleteEngineerUrl = 'http://localhost/sqltest/deleteEngineer.php';
private updateEngineerUrl = 'http://localhost/sqltest/updateEngineer.php';

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


  getEngineers() {
    return this.http.get<Engineer[]>(this.engineersUrl);
  }

  getEngineerById(payload: number): Observable<Engineer> {
    console.log(`${this.engineerUrl}?id=${payload}`);
    return this.http.get<Engineer>(`${this.engineerUrl}?id=${payload}`);
  }

  createEngineer(payload: Engineer): Observable<Engineer> {
    return this.http.post<Engineer>(
      `${this.createEngineerUrl}?Name=${payload.Name}&LastName=${payload.LastName}&Country=${payload.Country}
    &PhoneNumber=${payload.PhoneNumber}&Company=${payload.Company}`, payload);
  }

  updateEngineer(engineer: Engineer): Observable<Engineer> {
    console.log(
      engineer.id,
      engineer.Name,
      engineer.LastName,
      engineer.PhoneNumber,
      engineer.Country,
      engineer.Company,
      '- update engineer details from dataservice'
    );
    console.log(
      `${this.createEngineerUrl}?id=${engineer.id}&Name=${engineer.Name}&LastName=${engineer.LastName}&PhoneNumber=${engineer.PhoneNumber}&Country=${engineer.Country}&Company=${engineer.Company}`, ' - update link from dataservice'
    );

    return this.http.patch<Engineer>(
      `${this.updateEngineerUrl}?id=${engineer.id}&Name=${engineer.Name}&LastName=${engineer.LastName}&Country=${engineer.Country}
      &PhoneNumber=${engineer.PhoneNumber}&Company=${engineer.Company}`, engineer
    );
  }

  deleteEngineer(payload: number) {
    console.log(`${this.deleteEngineerUrl}?id=${payload}`, ' - deleteLink');
    return this.http.delete(`${this.deleteEngineerUrl}?id=${payload}`);
  }

// VISIT SERVICES



  getActiveVisits() {
    this.http.get<Visit[]>('http://localhost/sqltest/getactivevisits.php').subscribe(visits =>
      this.visits$.next(visits)
      );
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


}
