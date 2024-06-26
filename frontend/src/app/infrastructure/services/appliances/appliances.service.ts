import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IResGetAppliances } from '../../models/appliances.model';

@Injectable({
  providedIn: 'root',
})
export class AppliancesService {
  constructor(private http: HttpClient) {}

  getAppliances(): Observable<IResGetAppliances[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<IResGetAppliances[]>(`${environment.URL_APPLIANCES}/appliances`, {
      headers,
    });
  }
}
