import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.css']
})

export class EngineersComponent implements OnInit {
  obj = {'idisable': false};
  btnName = 'Insert';

  name: string;
  lastname: string;
  phonenumber: string;
  country: string;
  company: string;
  engineerId: string;

  engineer: object;


  constructor(private http: HttpClient) { }

  insertdata () {
    this.http.post('insert.php', {'name': this.name, 'lastname': this.lastname, 'phonenumber' : this.phonenumber,
    'country' : this.country, 'company': this.company } );
    this.displayEngineer();
  }

  displayEngineer() {
    return this.http.get('getengineers.php');

  }

  deleteEngineer (engineerId) {
    this.http.post('delete.php', { 'idEngineers' : engineerId } );
    this.displayEngineer();
  }

  editEngineer (engineerId, name, lastname, phonenumber, country, company) {
    this.engineerId = engineerId;
    this.name = name;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.country = country;
    this.company = company;
    this.btnName = 'Update';
    this.obj.idisable = true;
    this.displayEngineer();
  }

  ngOnInit() {
    this.displayEngineer().subscribe(data => {
      this.engineer = data;
      console.log(this.engineer);
    }
  );
  }
}
