import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http: HttpClient) { }

  // Crear una nueva persona
  crearPersona(persona: any): Observable<any> {
    return this.http.post(API_URL, persona);
  }

  // Obtener todas las personas
  obtenerPersonas(): Observable<any> {
    return this.http.get(API_URL);
  }

  // Contar personas por género (petición normal)
  contarGeneros(): Observable<any> {
    return this.http.get(`${API_URL}/conteo-genero`);
  }

  // Contar personas por género (long polling)
  contarGenerosLongPolling(): Observable<any> {
    return this.http.get(`${API_URL}/conteo-genero-longpoll`);
  }
}
