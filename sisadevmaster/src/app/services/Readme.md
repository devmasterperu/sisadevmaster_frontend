## Crear un servicio por consola
ng generate service services/nombreServicio --spec false
(services es el nombre de la carpeta donde tendrá nuestros servicio)
(--spect false es para no crear el archivo con extesión .spec)

## Creación de servicios
1. Crear tu servicio dentro de la carpeta services/nombreDeTuServicio.service.ts. Dentro de ella crearas un método que haga la llamada a traves del método GET
2. Ahora en el archivo nombrecomponent.component.ts deberas hacer la llamada de eso método en el componente donde quieras que se pinte la info. 
3. Tendrás visible la info por un console.log 😁


## Terminos 
- API ENDPOINT: This is HTTP endpoint URL using where we post data to the server.
- Body: This is the data object which we need to post to the server.
- Headers: We need to set request header for our HTTP POST Request.
- Options: This parameter is optional. Here we pass the object of RequestOptionsArgs that uses headers.
- Observable: This is the response type of Http.post().
