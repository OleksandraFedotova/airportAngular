import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pilot,PilotsList } from '../pilot';
import { PilotsService } from '../../../services/pilots/pilots.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  public pilots: PilotsList;
  public pilot: Pilot = new Pilot();

  constructor(private router: Router, private pilotsService: PilotsService) { }

  ngOnInit() {
    this.pilotsService.getPilots()
      .subscribe((pilots:PilotsList) => this.pilots= pilots);
  }

  create() {
    this.pilotsService.createPilot(this.pilot);
  }

  delete(id: string) {
    this.pilotsService.deletePilot(id);
    this.pilots.pilots = this.pilots.pilots.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/pilots/', id]);
  }

}
