import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PilotComponent } from './components/pilot/pilot.component';
import { StewardessComponent } from './components/stewardess/stewardess.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { FlightComponent } from './components/flight/flight.component';
import { CrewComponent } from './components/crew/crew.component';
import { DepartureComponent } from './components/departure/departure.component';
import { AircraftComponent } from './components/aircraft/aircraft.component';
import { AircraftTypeComponent } from './components/aircraft-type/aircraft-type.component';
import { MainComponent } from './components/main/main.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'pilots', component: PilotComponent}, 
  {path: 'stewardesses', component: StewardessComponent},
  {path: 'crews', component: CrewComponent},
  {path: 'tickets', component: TicketComponent},
  {path: 'departures', component: DepartureComponent},
  {path: 'flights', component: FlightComponent},
  {path: 'aircraft-types', component: AircraftTypeComponent},
  {path: 'aircrafts', component: AircraftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }