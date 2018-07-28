import { Component, OnInit } from '@angular/core';
import {Departure} from '../departure';
import {DeparturesService} from '../../../services/departures/departures.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-departure-component',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent implements OnInit {

  departure: Departure = new Departure();
  id: string;

  constructor(private departuresService: DeparturesService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.departuresService.getDeparture(this.id).subscribe(data => this.departure = data);
  }

  update(id: string){
    this.departuresService.updateDeparture(id, this.departure);

  }

  delete(id: string) {
    this.departuresService.deleteDeparture(id);
    this.location.back();
  }
}
