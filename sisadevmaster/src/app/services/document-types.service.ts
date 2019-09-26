import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  constructor( private http: HttpClient) { }

  getListTypeServices() {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/DocumentTypes');
  }
}
