import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'my-app',
  styles: [`
    agm-map {
       height: 300px;
     }
  `],
  template: `
    <div class="container">
      <h1>Angular 2 + Google Maps polyline </h1>
      <agm-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom">
         <ng-container>
           <agm-polyline *ngFor="let point of polyline;let i = index;"  [strokeColor]="point.speed < 50 ? '#2196f3': 'red'">
              <agm-polyline-point [latitude]="point.latitude" [longitude]="point.longitude">
              </agm-polyline-point>
              <ng-container *ngIf="polyline[i+1]">
                <agm-polyline-point [latitude]="polyline[i+1].latitude" [longitude]="polyline[i+1].longitude">
                </agm-polyline-point>
              </ng-container>
          </agm-polyline>
        </ng-container>
      </agm-map>
    </div>
  `
})
export class App implements OnInit {

  public latitude: number;
  public longitude: number;
  public maxSpeed: number;
  public zoom: number;
  public polyline: Array<any>;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 3;
    this.maxSpeed = 40;
    this.latitude = 21.291;
    this.longitude = -122.214;

    this.polyline = [
        {
            latitude:  39.8282,
            longitude: -98.5795,
            speed: 50
        },
        {
            latitude: 37.772,
            longitude: -122.214,
            speed: 20
        },
        {
            latitude: 21.291,
            longitude: -157.821,
             speed: 50
        },
        {
            latitude: -18.142,
            longitude: 178.431,
            speed: 20
        },
        {
            latitude: -27.467,
            longitude: 153.027,
            speed: 55
        }
    ]


    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class Polyline {}
