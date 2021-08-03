import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  url = 'https://api-ssl.bitly.com/v4/shorten';
  token = 'eeb2faa67c52b727ef73713d78bdf914358f545f';

  constructor( private http: HttpClient) {}

  getUrlShort(nombreUrl: string): Observable<any>{
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer '+this.token})  
    
    const body = {
      long_url: nombreUrl
    } 
    return this.http.post(this.url, body, {headers: tokenHeader});

  }
}
