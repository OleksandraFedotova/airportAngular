import { Component, OnInit } from '@angular/core';
import {AircraftType} from '../aircraft-type';
import {AircraftTypesService} from '../../../services/aircraft-types/aircraft-types.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-aircraft-type-component',
  templateUrl: './aircraft-type.component.html',
  styleUrls: ['./aircraft-type.component.css']
})
export class AircraftTypeComponent implements OnInit {

  aircraftType: AircraftType = new AircraftType();
  id: string;

  constructor(private aircraftTypesService: AircraftTypesService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.aircraftTypesService.getAircraftType(this.id).subscribe(data => this.aircraftType = data);
  }

  update(id: string){
    this.aircraftTypesService.updateAircraftType(id, this.aircraftType);

  }

  delete(id: string) {
    this.aircraftTypesService.deleteAircraftType(id);
    this.location.back();
  }
}
