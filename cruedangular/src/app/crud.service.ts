import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  private apiUrl = 'http://localhost:5109/api/Book'; 

  constructor(private http:HttpClient) { }

  // Crudoperation(bookData : any): Observable<AddBooks[]>{
  //   return this.http.get<AddBooks[]>(this.apiUrl)

  // }

  // registerUser(userData: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post<any>(this.apiUrl, userData, { headers });
  // }
}
