import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { App } from './polyline';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDweYsUi3edI2yHAbZ87uLxBpOCIGHpkS4'
    })
  ],
  providers: [],
  declarations: [ AppComponent, GoogleMapComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
