import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AircraftTypeList,AircraftType} from '../aircraft-type';
import {AircraftTypesService} from '../../../services/aircraft-types/aircraft-types.service';

@Component({
  selector: 'app-aircraft-types',
  templateUrl: './aircraft-types.component.html',
  styleUrls: ['./aircraft-types.component.css']
})
export class AircraftTypesComponent implements OnInit {


  public aircraftTypes: AircraftTypeList;
  public aircraftType: AircraftType = new AircraftType();

  constructor(private router: Router, private aircraftTypesService: AircraftTypesService) { }

  ngOnInit() {
    this.aircraftTypesService.getAircraftTypes()
      .subscribe((aircraftTypes:AircraftTypeList) => this.aircraftTypes= aircraftTypes);
  }

  create() {
    this.aircraftTypesService.createAircraftType(this.aircraftType);
  }

  delete(id: string) {
    this.aircraftTypesService.deleteAircraftType(id);
    this.aircraftTypes.aircraftTypes = this.aircraftTypes.aircraftTypes.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/aircraftTypes/', id]);
  }

}
