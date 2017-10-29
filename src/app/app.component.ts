import { Component } from '@angular/core';
declare var require: any
var json = require('./usAirport.json');

function parseJSON(json)
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

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'KATSURA PROTO-MAP';
  //zoom level
  zoom: number = 3;
  //start position
  lat: number = 38.68551;
  lon: number = -96.503906;
  //markers

  markerJSON: MyObj[] = parseJSON(json);

  constructor()
  {

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


let obj: MyObj = parseJSON(json);
console.log(json[5]);
console.log(json[7]);
