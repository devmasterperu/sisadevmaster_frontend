import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {
    /*
    *  ✅ Constructor
    */
    constructor( private http: HttpClient) { }

    getListTypeServices() {
        return this.http.get('https://devmasterdeswebapi.azurewebsites.net/api/DocumentTypes');
    }
}
