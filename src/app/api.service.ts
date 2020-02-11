import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Breed } from './breed';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  DJANGO_REST_API = 'https://vet-backend.herokuapp.com';

// Dependency injection, injected httpClient to send request to Django
  constructor(private httpClient: HttpClient) { }

  readBreed(): Observable<Breed[]> {
  return this.httpClient.get<Breed[]>(`${this.DJANGO_REST_API}/api/breeds`);
  }
  createBreed(breed: Breed): Observable<Breed[]> {
  return this.httpClient.post<Breed[]>(`${this.DJANGO_REST_API}/api/breeds`, breed); 
  }
  updateBreed(breed: Breed) {
  return this.httpClient.put<Breed[]>(`${this.DJANGO_REST_API}/api/breeds`, breed);
  }
  deleteBreed(id: number) {
  return this.httpClient.delete<Breed[]>(`${this.DJANGO_REST_API}/api/breeds/id=${id}`);
  }
}
