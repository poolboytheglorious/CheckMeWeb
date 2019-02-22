import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Visit } from '../root-store/models/visit.model';
import { State } from '../root-store/state/root-state';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  visits: Observable<Visit[]>;


  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.visits = this.store.select('visit');
    console.log(this.visits, 'view visits');
  }

}
