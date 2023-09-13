import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonaModel } from "@models/personaModel";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SavepersonService {

  private readonly URL = environment.api; 
  constructor(private http: HttpClient) { }

  savePerson$(body: PersonaModel): Observable<any>{
    // console.log("recibido", body)
    return this.http.post(`${this.URL}/persona/create`, body).pipe(
      map(response =>{
        return response
      }));
  }

}
