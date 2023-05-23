import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  apis = {
    "people": "https://swapi.dev/api/people/",
    "planets": "https://swapi.dev/api/planets/",
    "films": "https://swapi.dev/api/films/",
    "species": "https://swapi.dev/api/species/",
    "vehicles": "https://swapi.dev/api/vehicles/",
    "starships": "https://swapi.dev/api/starships/"
  }

  constructor(
    private http: HttpClient
  ) { }

  getData(data: string = "starship", page: number = 1): Observable<any> {
    return this.http.get(`https://swapi.dev/api/${data}/?page=${page}`);
  }
}
