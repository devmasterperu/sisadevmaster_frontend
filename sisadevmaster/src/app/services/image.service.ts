import { Injectable } from '@angular/core'; /* 👶🏼 */
/* Para metodos HTTP */
import { HttpClient } from '@angular/common/http';

import { ImageCurseModel } from '../models/image.model';

@Injectable({
      providedIn: 'root'
})
export class ImageService {

    constructor( private http: HttpClient) { }

    /*
    *    Subida de archivo al servidor
    *    1️⃣ Enviamos mediante una API un archivo y el servidor retorna con un nombre que no repita.
    */
    // Envio del archivo, donde me retornar un nombre que no repita
    getRegisterNameFile(file) {
        console.log(file);
        return this.http.post('https://devmasterdeswebapi.azurewebsites.net/api/image', file);
    }
}
