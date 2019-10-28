# SisADevmaster

## Entorno de trabajo

1.NodeJS: https://nodejs.org/es/ (Version 10 o superior | que sea la estable)

- Instalación es por instalador
- Confirmar: $npm -v

2.Google Chrome: https://www.google.es/chrome/browser/desktop/

3.TypeScript: http://www.typescriptlang.org/

- Instalar como npm: $npm install -g typescript (Version 2 o superior | Para windows correr el comando como Administrador, haciendo click derecho, y abrir consola como administrador)
- Confirmar: $tsc --version)

4.Angular CLI

- Instalar como npm: $npm install -g @angular/cli (Ultima 6.0 o superior)
- Confirmar: $ng -v

## Visual Studio Code

Plugins recomendados para los siguientes editores:

- Angular 2 TypeScript Emmet
- Angular 5 Snippets – TypeScript, Html, Angular Material
- Angular Language Service
- Angular v5 Snippets
- Angular2-inline
- Bootstrap 4 & Font Awesome snippets
- HTML CSS Support
- JavaScript (ES6) code snippets
- JS-CSS-HTML Formatter (No instalar, me trae quebradero de cabeza en identacion de Html)
- JSHint
- Material Icon Theme
- Prettier – Code Formatter
- Terminal
- TSLint
- TypeScript Hero
- TypeScript Importer

## Primer proyecto con Angular Cli

1. $ng new nombre-proyecto (Creacion del proyecto)

- Crear las rutas? yes
- Que extension de CSS utilizaras? scss
- $ng serve -o (Comando para ejecutar el proyecto)

## Crear un servicio por consola

- ng generate service services/nombreServicio --spec false
- (services es el nombre de la carpeta donde tendrá nuestros servicio)
(--spect false es para no crear el archivo con extesión .spec)

## Creación de servicios

1. Crear tu servicio dentro de la carpeta services/nombreDeTuServicio.service.ts. Dentro de ella crearas un método que haga la llamada a traves del método GET
2. Ahora en el archivo nombrecomponent.component.ts deberas hacer la llamada de eso método en el componente donde quieras que se pinte la info.
3. Tendrás visible la info por un console.log 😁

## Crear component
- ng g c components/nombreComponent --nospec
- (components es el nombre de la carpeta donde tendrá nuestros componentes)
(--nospec es para no crear el archivo con extesión .spec)

## Terminos

- API ENDPOINT: This is HTTP endpoint URL using where we post data to the server.
- Body: This is the data object which we need to post to the server.
- Headers: We need to set request header for our HTTP POST Request.
- Options: This parameter is optional. Here we pass the object of RequestOptionsArgs that uses headers.
- Observable: This is the response type of Http.post().

## Clases en los input para formularios

- ng-dirty: Le dice que el formulario HA SIDO modificado por el usuario
- ng-pristine: Le dice que el formulario NO HA SIDO modificado por el usuario

## LocalStorage vs SesionStore

- LocalStorage: Almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador.
- SesionStore: Almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina.

## JSON.stringify y su inversa JSON.parse

- https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage
- JSON.stringify: es una función incorporada en JSON que nos permite tomar un objeto o matriz de JavaScript y crear una cadena JSON a partir de él.
- JSON.parse: El método JSON.parse () en JavaScript se usa para analizar una cadena JSON que está escrita en un formato JSON y devolver un objeto JavaScript.

## Multilayout en Angular

- https://stackblitz.com/edit/angular-multi-layout-example-mbbyyr?file=app/app.routing.ts

## Constructor Vs ngOnInit

- https://medium.com/@coderonfleek/constructor-vs-ngoninit-angular-2-components-b1a33db0be65
- https://ultimatecourses.com/blog/angular-constructor-ngoninit-lifecycle-hook

## Formularios Reactivos en Angular

- https://academia-binaria.com/formularios-reactivos-con-Angular/

## Setvalue vs Patchvalue en Angular

- Setvalue y Patchvalue son métodos del Angular Formgroup. Ambos establecen el valor de un control en un grupo de formularios. La clara diferencia es que setvalue no puede excluir algunos controles, mientras que el patchvalue puede hacer exactamente eso.
Así que supongamos que tenemos un grupo de formularios con 2 controles: Nombre y edad
Si queremos establecer el valor de un control, esto no funcionará, por lo tanto tenemos que establecer el valor de ambos controles:
formgroup.setValue ({nombre: 'Mocrosoft', edad: '25'});
Es necesario mencionar todos los controles dentro del método. Si esto no se hace, arrojará un error.
Por otro lado, el valor de parche es mucho más fácil en esa parte, digamos que solo queremos asignar el nombre como un nuevo valor:
formgroup.patchValue ({nombre: 'Mocrosoft'});
Vea cómo excluimos la edad y esto funcionará sin arrojar ningún error.

- https://ultimatecourses.com/blog/angular-2-form-controls-patch-value-set-value
- https://medium.com/@samichkhachkhi/setvalue-vs-patchvalue-angular-a64a55e912b8

## METODOS HTTP

- GET (Obtienes registros)
- POST (Crear registros)
- PUT (Vas actualizar todos los campos de un recursos)
- PATCH (Actualizas solo los campos cambiados)

## Validación en Reactive Form

- https://malcoded.com/posts/angular-reactive-form-validation/

## Mejores comandos para Angular CLI

- https://malcoded.com/posts/angular-fundamentals-cli/

## Registrar y Actualizar

- En este sistema se estan creando en vistas diferentes.

## Uploading file Reactive Form

- https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03