import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;
  clicked = false;


  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  editEntry(){
//edit visit details
  }

  toggleActive(){

  }

  firstClick() {
    this.clicked = true;
  }



}
