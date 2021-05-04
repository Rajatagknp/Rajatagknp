import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
import { repos } from './repos';
 
@Injectable()
export class GitHubService {
 
  constructor(private http: HttpClient) {
  }
 
  baseURL: string = "https://api.covid19api.com/summary";
  getData(): Observable<any> {
    return this.http.get(this.baseURL)
  }

  countryURL: string = "https://api.covid19api.com/live/country/";
  getCountryData(countryName: String): Observable<any> {
    return this.http.get(this.countryURL+countryName)
  }
 
}