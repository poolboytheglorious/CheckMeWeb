import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  obj = {'idisable': false};
  btnName = 'Insert';

  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;
  engineerId: string;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }


  getPresence() {
    return this.http.get('presences.php');
  }


}
