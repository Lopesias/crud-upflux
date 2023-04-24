
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente';
import { environment } from 'src/environments/environment';

let baseUrl = environment.api + 'pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  create(data: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(baseUrl, data);
  }

  update(data: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${baseUrl}/${data.id}`, data);
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
