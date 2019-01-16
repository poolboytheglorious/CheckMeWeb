import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {




  constructor(private data: DataService) { }

  users: object;

  ngOnInit() {
      this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

}
