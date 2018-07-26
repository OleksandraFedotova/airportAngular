import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PilotComponent } from './components/pilot/pilot.component';
import { StewardessComponent } from './components/stewardess/stewardess.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { FlightComponent } from './components/flight/flight.component';
import { CrewComponent } from './components/crew/crew.component';
import { DepartureComponent } from './components/departure/departure.component';
import { AircraftComponent } from './components/aircraft/aircraft.component';
import { AircraftTypeComponent } from './components/aircraft-type/aircraft-type.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    PilotComponent,
    StewardessComponent,
    TicketComponent,
    FlightComponent,
    CrewComponent,
    DepartureComponent,
    AircraftComponent,
    AircraftTypeComponent,
    MainComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
