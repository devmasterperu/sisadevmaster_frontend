import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

import { ImageCurseModel } from '../models/image.model';

@Injectable({
      providedIn: 'root'
})
export class ImageService {

    constructor( private http: HttpClient) { }

    // Envio del archivo, donde me retornar un nombre que no repita
    getRegisterNameFile(file) {
        return this.http.post('https://devmasterdeswebapi.azurewebsites.net/api/image', file, {
            reportProgress: true,
            observe: 'events'
        });
    }
}
