import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private API_PERSONAJES = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/all.json";

  constructor(private http: HttpClient) { }

  public getAllPersonajes(): Observable<any>{
    return this.http.get(this.API_PERSONAJES);
  }
}
