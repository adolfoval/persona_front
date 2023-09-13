import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { personaResponse } from "@models/personaModel";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TablepersonService {
  private readonly URL = environment.api;
  private _refreshNode$ = new Subject<void>();
  private _listeners = new Subject<any>();
  constructor(private http: HttpClient) { }



  getPersons$(): Observable<any>{
    console.log("me llamo")
    return this.http.get<personaResponse>(`${this.URL}/persona/all`).pipe(
      // map(response =>{
      //     return response;
      // }),
      tap(() =>{
        this._refreshNode$.next()
      })
    );
  }

  getPersonsBy$(data: string): Observable<any>{
    console.log("Llamo al by");
    console.log(`And got ${data}`);
    return this.http.get<personaResponse>(`${this.URL}/persona/filtro/${data}`).pipe(
      // map(response =>{
      //     return response;
      // }),
      tap(() =>{
        this._refreshNode$.next()
      })
    );
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string, data: any){
    this._listeners.next([filterBy, data])
  }
}
