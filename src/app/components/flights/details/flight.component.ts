import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight';
import {FlightsService} from '../../../services/flights/flights.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-flight-component',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flight: Flight = new Flight();
  id: string;

  constructor(private flightsService: FlightsService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.flightsService.getFlight(this.id).subscribe(data => this.flight = data);
  }

  update(id: string){
    this.flightsService.updateFlight(id, this.flight);

  }

  delete(id: string) {
    this.flightsService.deleteFlight(id);
    this.location.back();
  }

}
