import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppliancesService {
  constructor(private http: HttpClient) {}

  getAppliances(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get<any>(`/appliances`, {
      headers,
    });
  }
}
