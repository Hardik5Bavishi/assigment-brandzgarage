import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  getArtist(name: string, tracks: number): Observable<any> {
    return this._http.get(`http://itunes.apple.com/search?term=${name}&limit=${tracks}`);
  }
}
