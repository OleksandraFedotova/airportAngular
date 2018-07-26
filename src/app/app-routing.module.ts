import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotsComponent } from './components/pilots/list/pilots.component';
import { PilotComponent } from './components/pilots/details/pilot.component';
import { StewardessesComponent } from './components/stewardesses/list/stewardesses.component';
import { StewardessComponent } from './components/stewardesses/details/stewardess.component';
import { TicketsComponent } from './components/tickets/list/tickets.component';
import { TicketComponent } from './components/tickets/details/ticket.component';
import { FlightsComponent } from './components/flights/list/flights.component';
import { FlightComponent } from './components/flights/details/flight.component';
import { CrewsComponent } from './components/crews/list/crews.component';
import { CrewComponent } from './components/crews/details/crew.component';
import { DeparturesComponent } from './components/departures/list/departures.component';
import { DepartureComponent } from './components/departures/details/departure.component';
import { AircraftsComponent } from './components/aircrafts/list/aircrafts.component';
import { AircraftComponent } from './components/aircrafts/details/aircraft.component';
import { AircraftTypesComponent } from './components/aircraft-types/list/aircraft-types.component';
import { AircraftTypeComponent } from './components/aircraft-types/details/aircraft-type.component';
import { MainComponent } from './components/main/main.component'

const routes: Routes = [
  { path: '', component: MainComponent },

  { path: 'pilots', component: PilotsComponent },
  { path: 'pilots/:id', component: PilotComponent },

  { path: 'stewardesses', component: StewardessesComponent },
  { path: 'stewardesses/:id', component: StewardessComponent },

  { path: 'crews', component: CrewsComponent },
  { path: 'crews/:id', component: CrewComponent },

  { path: 'tickets', component: TicketsComponent },
  { path: 'tickets/:id', component: TicketComponent },

  { path: 'departures', component: DeparturesComponent },
  { path: 'departures/:id', component: DepartureComponent },

  { path: 'flights', component: FlightsComponent },
  { path: 'flights/:id', component: FlightComponent },

  { path: 'aircraft-types', component: AircraftTypesComponent },
  { path: 'aircraft-types/:id', component: AircraftTypeComponent },

  { path: 'aircrafts', component: AircraftsComponent },
  { path: 'aircrafts/:id', component: AircraftComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }