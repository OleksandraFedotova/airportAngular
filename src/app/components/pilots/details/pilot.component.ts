import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PilotsService} from '../../../services/pilots/pilots.service';
import {Location} from '@angular/common';
import {Pilot} from '../pilot';


@Component({
  selector: 'app-pilot-component',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})

export class PilotComponent implements OnInit {

  pilot: Pilot = new Pilot();
  id: string;

  constructor(private pilotsService: PilotsService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.pilotsService.getPilot(this.id).subscribe(data => this.pilot = data);
  }

  update(id: string){
    this.pilotsService.updatePilot(id, this.pilot);

  }

  delete(id: string) {
    this.pilotsService.deletePilot(id);
    this.location.back();
  }

}
