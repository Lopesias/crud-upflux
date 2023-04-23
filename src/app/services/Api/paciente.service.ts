import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let baseUrl = "../../assets/db.json";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  } 

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }  

}
