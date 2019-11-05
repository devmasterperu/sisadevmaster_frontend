# SisADevmaster

## Entorno de trabajo

1.NodeJS: https://nodejs.org/es/ (Version 10 o superior | que sea la estable)

- Instalación es por instalador
- Confirmar ➡️ $npm -v
- Junto con Node se te instala otro programita, Npm, que te facilita la vida para instalar, desinstalar y actualizar los módulos de Node. En general, cuando trabajas con Angular se usan muchos módulos de Node, y Npm te ayuda un montón para no volverte loco bajando y actualizando estos módulos.

2.Google Chrome: https://www.google.es/chrome/browser/desktop/

3.TypeScript: http://www.typescriptlang.org/

- Instalar como npm: $npm install -g typescript (Version 2 o superior | Para windows correr el comando como Administrador, haciendo click derecho, y abrir consola como administrador)
- Confirmar ➡️ $tsc --version)

4.Angular CLI

- Instalar como npm: $npm install -g @angular/cli (Ultima 6.0 o superior)
- Confirmar ➡️ $ng -v
- Angular-cli es un módulo de Node,  y ¿para qué sirve? para crearte aplicaciones angular de forma muy rápida. Es como si quisieras hacer una casa pero sin tener idea de albañilería, te ponés a hablar con el arquitecto, le vas diciendo, hacéme 2 habitaciones de 6mts x 5mts, con un baño y 2 puertas. Con Angular-cli pasa algo similar, le indicás (mediante lineas de comando) como querés hacer tu aplicación.

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
- Banana in the box: https://gustavodohara.com/blogangular/banana-in-box-banana-la-caja/
- two-ways biding = bidireccional (o sea, al mecanismo de actualizar la vista y el modelo al mismo tiempo)

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
- https://www.codingforentrepreneurs.com/blog/file-upload-with-angular/
- https://developer.mozilla.org/es/docs/Web/Guide/Usando_Objetos_FormData
- https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/

## Página /docente/configurar_curso

- Para la subida de archivos('.png, .jpg, .jpge, .pdf'), se valida a traves del atributos HTML5 y tambien con javascript.

## Raddio Button

- https://www.positronx.io/angular-7-radio-buttons-example/

**¿Que es una Interpolación en Angular?**

- La interpolación es la forma de mostrar datos del Componente al DOM (esa representación que hace el browser del HTML con forma de objetos). Su notación es en forma de doble brackets {{}} y lo que está dentro de esos brackets es lo que se quiere mostrar en pantalla «procesado».

**Property Binding**

- Al igual que la Interpolación, Property Binding se usa para pasar datos del Controler al DOM, y los datos van en una única dirección

**¿Cuándo usamos Property Binding y cuando Interpolación?**

- Básicamente, cuando el valor que vas a setear es un string, no hay diferencia entre usar uno y otro, así que podes usar el que más te guste. Te recomiendo usar una forma y mantenerla en todo tu proyecto para facilitar la lectura del mismo.

**Event Binding**

- Ésta es la forma de enviar «algo» del elemento al componente. La sintaxis es (evento)=»template statement». Cualquier acción que haga el usuario (ingresar texto, apretar un botón, scrollear con la ruedita del mouse) es una acción que se puede capturar. Cualquiera de esas acciones puede disparar una acción desde el elemento DOM hacia el Controlador.En cambio, cuando lo que seteás no es un string, entonces sí o sí tenés que usar Property Binding
- ➡️ <button (click)="onSubmitRegister()">Guardar</button>
- El target event o evento a capturar (click) en el ejemplo, es cualquier cosa que queremos capturar del usuario (clicks, tecleo de teclas, movimientos del mouse, etc)

**$event y el manejo de eventos**

- Cuando se declara un Event Binding, Angular le asigna al Evento a capturar un handler (o un manejador). Este manejador tiene como objetivo ejecutar la «template statement» cuando el evento ocurra. Además, lo que hace el handler es recibir un objeto llamado $event (este objeto es creado por Angular) y lo deja disponible para la Template statement por si necesita algún dato del evento
- Por ejemplo, en el Tag HTML «input» que captura datos del teclado del usuario, si uno quisiera capturar qué tecleó el usuario, se podría acceder de la siguiente forma: $event.target.value. El $event cambiará dependiendo del evento que se capture

**¿Y cómo creamos nuestro propio Event Binding?**

- Muy fácil, usando la clase EventEmitter proporcionada por Angular. Esta clase tiene un método llamado emit que envía un mensaje de un controlador a otro. Pero es más fácil verlo con un ejemplo, tenemos un componente dentro de otro y queremos que el componente interno le envié un mensaje al componente externo.

## Deteccion de cambios en Angular

- ¿Que pasa si quieres registrar datos en el formulario y quieres que automaticamente ese registro se vea reflejado en la tabla?
- Angular tiene una mecanismo denominado ChangeDetector para detectar inconsistencias (cambios), entre el estado del component y la vista.
- https://blog.ng-classroom.com/blog/angular/Angular-Detect-Changes/
- https://medium.com/@ltciro/entendiendo-change-detection-en-angular-parte-1-5e644c64c2fe
- https://academia-binaria.com/deteccion-del-cambio-en-Angular/

## Ng Bootstrap

- ngx-bootstrap contiene todos los componentes básicos (y no solo) de Bootstrap con tecnología Angular. Por lo tanto, no necesita incluir componentes JS originales, pero estamos utilizando marcado y CSS proporcionados por Bootstrap.
- https://valor-software.com/ngx-bootstrap/#/
1- Agregas el css de bootstrap 4 (Como lo has agregado con Sass)
2- $ng add ngx-bootstrap --component componentName
- List of possible commands for adding appropriate component:
- ng add ngx-bootstrap  --component accordion
- ng add ngx-bootstrap  --component alerts
- ng add ngx-bootstrap  --component buttons
- ng add ngx-bootstrap  --component carousel
- ng add ngx-bootstrap  --component collapse
- ng add ngx-bootstrap  --component datepicker
- ng add ngx-bootstrap  --component dropdowns
- ng add ngx-bootstrap  --component modals
- ng add ngx-bootstrap  --component pagination
- ng add ngx-bootstrap  --component popover
- ng add ngx-bootstrap  --component progressbar
- ng add ngx-bootstrap  --component rating
- ng add ngx-bootstrap  --component sortable
- ng add ngx-bootstrap  --component tabs
- ng add ngx-bootstrap  --component timepicker
- ng add ngx-bootstrap  --component tooltip
- ng add ngx-bootstrap  --component typeahead