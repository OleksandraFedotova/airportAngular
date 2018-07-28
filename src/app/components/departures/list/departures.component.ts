import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{DepartureList,Departure} from '../departure';
import {DeparturesService} from '../../../services/departures/departures.service';


@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {

  public departures: DepartureList;
  public departure: Departure = new Departure();

  constructor(private router: Router, private departuresService: DeparturesService) { }

  ngOnInit() {
    this.departuresService.getDepartures()
      .subscribe((departures:DepartureList) => this.departures= departures);
  }

  create() {
    this.departuresService.createDeparture(this.departure);
  }

  delete(id: string) {
    this.departuresService.deleteDeparture(id);
    this.departures.departures = this.departures.departures.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/departures/', id]);
  }

}
