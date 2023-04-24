 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente';

let baseUrl = 'http://localhost:3000/pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }
 
  create(data: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(baseUrl, data);
  }  

  update(id: any, data: any): Observable<Paciente> {
    return this.http.put<Paciente>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<Paciente> {
    return this.http.delete<Paciente>(`${baseUrl}/${id}`);
  }

  get(id: any): Observable<Paciente> {
    return this.http.get<Paciente>(`${baseUrl}/${id}`);
  }

  getAll(): Observable<Paciente[]> { 
    return this.http.get<Paciente[]>(`${baseUrl}`);
  }  

}
