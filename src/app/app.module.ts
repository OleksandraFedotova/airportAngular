import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { PilotsModule } from './components/pilots/pilots.module';
import { StewardessesModule } from './components/stewardesses/stewardesses.module';
import { TicketsModule } from './components/tickets/tickets.module';
import { FlightsModule } from './components/flights/flights.module';
import { CrewsModule  } from './components/crews/crews.module';
import { DeparturesModule  } from './components/departures/departures.module';
import { AircraftsModule } from './components/aircrafts/aircrafts.module';
import { AircraftTypesModule } from './components/aircraft-types/aircraft-types.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  imports: [
    [BrowserModule],
    [FormsModule],
    [HttpClientModule],
    [AppRoutingModule],
    [PilotsModule],
    [StewardessesModule],
    [TicketsModule],
    [FlightsModule],
    [CrewsModule],
    [DeparturesModule],
    [AircraftsModule],
    [AircraftTypesModule],
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
