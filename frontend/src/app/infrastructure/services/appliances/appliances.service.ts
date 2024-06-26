import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  IDeleteAppliance,
  IModifyBodyAppliances,
  IRequestBodyAppliances,
  IResGetAppliances,
} from '../../models/appliances.model';

@Injectable({
  providedIn: 'root',
})
export class AppliancesService {
  private products!: Subject<IResGetAppliances[]>;

  constructor(private http: HttpClient) {}

  getAppliances(): Observable<IResGetAppliances[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get<IResGetAppliances[]>(`${environment.URL_APPLIANCES}/appliances`, {
        headers,
      })
      .pipe(
        map((res) => {
          this.setConsultedProducts(res);
          return res;
        })
      );
  }

  setAppliance(
    appliance: IRequestBodyAppliances
  ): Observable<IRequestBodyAppliances> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<IRequestBodyAppliances>(
      `${environment.URL_APPLIANCES}/appliances`,
      appliance,
      {
        headers,
      }
    );
  }

  modifyAppliance(
    appliance: IModifyBodyAppliances,
    applianceId: string
  ): Observable<IModifyBodyAppliances> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IModifyBodyAppliances>(
      `${environment.URL_APPLIANCES}/appliances/${applianceId}`,
      appliance,
      {
        headers,
      }
    );
  }

  deleteAppliance(applianceId: string): Observable<IDeleteAppliance> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<IDeleteAppliance>(
      `${environment.URL_APPLIANCES}/appliances/${applianceId}`,
      {
        headers,
      }
    );
  }

  getConsultedProducts(): Observable<IResGetAppliances[]> {
    return this.products;
  }

  setConsultedProducts(products: IResGetAppliances[]): void {
    this.products.next(products);
  }
}
