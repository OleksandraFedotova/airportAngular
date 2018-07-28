import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CrewList,Crew} from '../crew';
import {CrewsService} from '../../../services/crews/crews.service';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.css']
})
export class CrewsComponent implements OnInit {
  public crews: CrewList;
  public crew: Crew = new Crew();

  constructor(private router: Router, private crewsService: CrewsService) { }

  ngOnInit() {
    this.crewsService.getCrews()
      .subscribe((crews:CrewList) => this.crews= crews);
  }

  create() {
    this.crewsService.createCrew(this.crew);
  }

  delete(id: string) {
    this.crewsService.deleteCrew(id);
    this.crews.crews = this.crews.crews.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/crews/', id]);
  }
  
}
