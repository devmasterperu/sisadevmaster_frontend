## Crear un servicio por consola
ng generate service services/nombreServicio --spec false
(services es el nombre de la carpeta donde tendrá nuestros servicio)
(--spect false es para no crear el archivo con extesión .spec)

## Creación de servicios
1. Crear tu servicio dentro de la carpeta services/nombreDeTuServicio.service.ts. Dentro de ella crearas un método que haga la llamada a traves del método GET
2. Ahora en el archivo nombrecomponent.component.ts deberas hacer la llamada de eso método en el componente donde quieras que se pinte la info. 
3. Tendrás visible la info por un console.log 😁
