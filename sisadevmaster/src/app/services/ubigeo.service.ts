import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor( private http: HttpClient) {}

  /*
  * ✅ For Dropdown Cascadin
  */

  /* Carga a la hora que carga la pagina */
  getListUbigeoDepartament() {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Locations?type=DE&code=1');
  }

  /* Al cambio del select provincia */
  getListUbigeoProvince(item) {
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Locations?type=PR&code=' + item );
  }

  /* Al cambio del select distrito */
  getListUbigeoDistrict(item) {
    console.log(item);
    return this.http.get('https://devmasterwebapi.azurewebsites.net/api/Locations?type=DI&code=' + item );
  }
}
