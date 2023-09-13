import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonaModel } from "@models/personaModel";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UpdatepersonService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  updatePerson$(persona: PersonaModel): Observable<any>{
    const per_identificacion = Number(persona.peridentificacion);
    console.log(persona);
    return this.http.put(`${this.URL}/persona/${per_identificacion}`, persona).pipe(
      map( response =>{
        return response;
      })
    )
  }
}
