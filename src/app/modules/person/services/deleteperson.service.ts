import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonaModel } from "@models/personaModel";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DeletepersonService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  deletePerson$(periden: string): Observable<any>{
    const per_identificacion = Number(periden);
    return this.http.delete(`${this.URL}/persona/${per_identificacion}`).pipe(
      map( response =>{
        return response;
      })
    )
  }
}
