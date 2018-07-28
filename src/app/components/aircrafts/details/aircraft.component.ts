import { Component, OnInit } from '@angular/core';
import {Aircraft} from '../aircraft';
import {AircraftsService} from '../../../services/aircraft/aircrafts.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-aircraft-component',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  aircraft: Aircraft = new Aircraft();
  id: string;

  constructor(private aircraftsService: AircraftsService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.aircraftsService.getAircraft(this.id).subscribe(data => this.aircraft = data);
  }

  update(id: string){
    this.aircraftsService.updateAircraft(id, this.aircraft);

  }

  delete(id: string) {
    this.aircraftsService.deleteAircraft(id);
    this.location.back();
  }
}
