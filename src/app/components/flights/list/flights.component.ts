import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FlightList,Flight} from '../flight';
import {FlightsService} from '../../../services/flights/flights.service';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  public flights: FlightList;
  public flight: Flight = new Flight();

  constructor(private router: Router, private flightsService: FlightsService) { }

  ngOnInit() {
    this.flightsService.getFlights()
      .subscribe((flights:FlightList) => this.flights= flights);
  }

  create() {
    this.flightsService.createFlight(this.flight);
  }

  delete(id: string) {
    this.flightsService.deleteFlight(id);
    this.flights.flights = this.flights.flights.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/flights/', id]);
  }
}
