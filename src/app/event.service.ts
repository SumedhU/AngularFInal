import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private headers = new HttpHeaders({
    'x-rapidapi-key': '830db0cc68mshe00825b60eff1d0p1270bdjsn12624512f559', // Replace with your actual RapidAPI key
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  getTop100Movies(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
}
