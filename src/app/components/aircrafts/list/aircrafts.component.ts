import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AircraftList,Aircraft} from '../aircraft';
import {AircraftsService} from '../../../services/aircraft/aircrafts.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  public airCrafts: AircraftList;
  public aircraft: Aircraft = new Aircraft();

  constructor(private router: Router, private aircraftsService: AircraftsService) { }

  ngOnInit() {
    this.aircraftsService.getAircrafts()
      .subscribe((aircrafts:AircraftList) => this.airCrafts= aircrafts);
  }

  create() {
    this.aircraftsService.createAircraft(this.aircraft);
  }

  delete(id: string) {
    this.aircraftsService.deleteAircraft(id);
    this.airCrafts.aircrafts = this.airCrafts.aircrafts.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/aircraft-types/', id]);
  }
}
