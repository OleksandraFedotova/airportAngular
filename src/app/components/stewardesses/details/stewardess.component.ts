import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StewardessesService} from '../../../services/stewardesses/stewardesses.service';
import {Location} from '@angular/common';
import {Stewardess} from '../stewardess';

@Component({
  selector: 'app-stewardess-component',
  templateUrl: './stewardess.component.html',
  styleUrls: ['./stewardess.component.css']
})
export class StewardessComponent implements OnInit {

  stewardess: Stewardess = new Stewardess();
  id: string;

  constructor(private stewardessesService: StewardessesService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.stewardessesService.getStewardess(this.id).subscribe(data => this.stewardess = data);
  }

  update(id: string){
    this.stewardessesService.updateStewardess(id, this.stewardess);

  }

  delete(id: string) {
    this.stewardessesService.deleteStewardess(id);
    this.location.back();
  }
}
