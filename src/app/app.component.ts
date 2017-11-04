import { Component, OnInit} from '@angular/core';
import { HttpModule, Headers, RequestOptions, Jsonp, Response } from '@angular/http';
import { PrototypeService } from './services/prototype.service';
declare var require: any;
declare var google: any;
var json = require('./usAirport.json');
var planeJSON = require('./planeTravel.json');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PrototypeService]
})
export class AppComponent  {
  title: string = 'PROTO-MAP';
  //zoom level
  zoom: number = 4;
  //start position
  lat: number = 38.68551;
  lon: number = -96.503906;

  constructor(
    private service: PrototypeService
  ){}

// json = this.service.getMarkers();

  //markers
  markerJSON: MyObj[] = this.parseJSON(json);
  planeTravelJSON: MyObj[] = this.parseJSON(planeJSON);

  parseJSON(json)
  {
    for(var i = 0; i < json.length; i++){
      var obj = json[i];
      for(var prop in obj){
          if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
              obj[prop] = +obj[prop];
          }
      }
      console.log(json[i]);
  }

    return json;
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('agm-map'), {
      center: {
        lat: 53,
        lng: 0
      },
      zoom: 6,
      mapTypeId: 'terrain'
    });

    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    var lineSymbol = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      scale: 3, // change the size
      strokeColor: '#393'
    };
    // Create the polyline and add the symbol to it via the 'icons' property.
     var line = new google.maps.Polyline({
       path: [{
         lat: 51.4700,
         lng: 0.4543
       }, {
         lat: 50.1109,
         lng: 8.6821
       }],
       strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 0, // change this value to show / hide the line
      icons: [{
        icon: lineSymbol,
        offset: '100%'
      }],
      map: map
    });
    this.animateCircle(line);
  }

  // Use the DOM setInterval() function to change the offset of the symbol
  // at fixed intervals.
  animateCircle(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200; // change this to 1000 to only show the line once
      var icons = line.get('icons');
      icons[0].offset = (count / 2) + '%';
      line.set('icons', icons);
    }, 50); // change this value to change the speed
  }

  clickedMarker(marker:MyObj,index:number)
  {
    console.log('Clicked Marker: ' + marker.name + " at index " + index);
  }

  mapClicked($event:any)
  {
    var newMarker = {
      name: 'Untitled',
      continent: "NA",
      iata: "unk",
      iso: "unk",
      size: "large",
      type: "unk",
      status: 1,
      lat: $event.coords.lat,
      lon: $event.coords.lng,
      draggable: true
      }
      this.markerJSON.push(newMarker);
  }


}

interface MyObj {
  continent: string;
  iata: string;
  iso: string;
  size: string;
  name: string;
  lon: number;
  type: string;
  lat: number;
  status: number;
  draggable:boolean;
}


// let obj: MyObj = parseJSON(json);
