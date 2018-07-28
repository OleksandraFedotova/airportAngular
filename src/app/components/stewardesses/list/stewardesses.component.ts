import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stewardess,StewardessList } from '../stewardess';
import { StewardessesService } from '../../../services/stewardesses/stewardesses.service';


@Component({
  selector: 'app-stewardesses',
  templateUrl: './stewardesses.component.html',
  styleUrls: ['./stewardesses.component.css']
})
export class StewardessesComponent implements OnInit {

  public stewardesses: StewardessList;
  public pilot: Stewardess = new Stewardess();

  constructor(private router: Router, private stewardessesService: StewardessesService) { }

  ngOnInit() {
    this.stewardessesService.getStewardesses()
      .subscribe((stewardesses:StewardessList) => this.stewardesses= stewardesses);
  }

  create() {
    this.stewardessesService.createStewardess(this.pilot);
  }

  delete(id: string) {
    this.stewardessesService.deleteStewardess(id);
    this.stewardesses.stewardesses = this.stewardesses.stewardesses.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/stewardesses/', id]);
  }

}
