import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.development';
import { map } from "rxjs/operators";
import { Ciudad, CiudadResponse } from "@models/ciudadModel";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getCities$(data : string):Observable<Ciudad[]>{
    const depId = Number(data)
    return this.http.get<Ciudad[]>(`${this.URL}/ciudad/${depId}`).pipe(
      map((response: any) =>{
        
        return response.data 
      }));
  }
}
