import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Jsonp, Response } from '@angular/http';
import { LoggingService } from '../services/logging.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PrototypeService
{
  constructor(private http: Http) {}
  getMarkers()
  {
    return this.http.get('api/init').map(res => res.json());
  }
}
