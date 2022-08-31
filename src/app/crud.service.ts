import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from './crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url='http://localhost:3000/lista'
  constructor(private http: HttpClient) { }

  get():Observable<Crud[]>{
    return this.http.get<Crud[]>(this.url)
  }

  delete(id: number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }
  post(requisicao: Crud): Observable<Crud[]>{
    return this.http.post<Crud[]>(this.url, requisicao)
  }
  getPorID(id: string): Observable<Crud>{
   const urlID = `${this.url}/${id}`
   return this.http.get<Crud>(urlID)
  }
  update(id: string, requisicao: Crud): Observable<Crud[]>{
    const urlID = `${this.url}/${id}`
    return this.http.put<Crud[]>(urlID, requisicao)
  }
}
