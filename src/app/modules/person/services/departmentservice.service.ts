import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.development';
import { map } from "rxjs/operators";
import { Departamento, DepartamentoResponse } from '@models/departamentoModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) { }

  getDepartments$():Observable<DepartamentoResponse>{
    return this.http.get<DepartamentoResponse>(`${this.URL}/departamento/all`).pipe(
      map((response: any) =>{
        
        return response
      }));
  }
}
