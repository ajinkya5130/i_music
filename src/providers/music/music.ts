 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const APIMusicList :string="http://www.digitalyou.co.in/android_pms/data.json";

@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }

  getMusicList(): Observable<any>{
   return this.http.get(APIMusicList);
  }

}
