import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { personaResponse, personaRe } from "@models/personaModel";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TablepersonService {
  private readonly URL = environment.api;
  private data: personaResponse = {data: [], message:""};
  private personaObs$: BehaviorSubject<personaResponse>;
  
  constructor(private http: HttpClient) { 
    this.personaObs$ = new BehaviorSubject(this.data);
  }

  get PersonaObsObject$(){
    return this.personaObs$.asObservable();
  }

  set SetPersonaObs(data: Array<string>){
    if(data[0] === "Register click"){
      this.http.get<personaResponse>(`${this.URL}/persona/all`).subscribe(
        response =>{
          this.personaObs$.next(response);
        }
      );
    }else{
      this.http.get<personaResponse>(`${this.URL}/persona/filtro/${data[1]}`).subscribe(
        respose =>{
          this.personaObs$.next(respose);
        }
      );
    }
  }

  getPersons$():Observable<personaResponse>{
    return this.http.get<personaResponse>(`${this.URL}/persona/all`);
  }
}
