import { Component, OnInit } from '@angular/core';
import {Crew} from '../crew';
import {CrewsService} from '../../../services/crews/crews.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-crew-component',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: Crew = new Crew();
  id: string;

  constructor(private crewsService: CrewsService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.crewsService.getCrew(this.id).subscribe(data => this.crew = data);
  }

  update(id: string){
    this.crewsService.updateCrew(id, this.crew);

  }

  delete(id: string) {
    this.crewsService.deleteCrew(id);
    this.location.back();
  }

}
