## Registrar Calificación
- commit 41 / 

## En el Formulario
1. Evento dentro del formulario (atributos en <form>) ➡️ (ngSubmit)="registerQualification(formRegisterQualification)" #formRegisterQualification="ngForm"
2. Validaciones dentro de cada input ➡️ [(ngModel)]="qualification.evaluationName" #varEvaluationName="ngModel"
3. En el boton de submit ➡️ [disabled]="!formRegisterQualification.valid"


## En el Componente
1. qualification debe estar declarado ➡️ qualification:Object = {}
2. crear la funcion que dispara el <form> ➡️ registerQualification(formRegisterQualification){ console.log(formRegisterQualification.value); }
3. Crear el servicio **(Dentro del servicio teacher.service.ts)**
4. Crear el método **(Dentro del servicio teacher.service.ts)**
5. importar el modelo previamente creado

## NgForm y Template
NgForm en Angular 7 para trabajar con formularios. También aprenderá sobre las variables de referencia de plantilla y cómo puede usarlas para hacer referencia a elementos DOM o directivas angulares integradas (como ngForm) en sus plantillas.
- **¿Que es ngForm?** Es simplemente una directiva exportada desde FormsModule que se agrega automáticamente a todas las etiquetas <form> en sus plantillas de Angular una vez que importa el módulo.
- La directiva ngForm crea un FormGroup de nivel superior, instancia y lo vincula a su etiqueta <form> para permitirle trabajar con el formulario. Por ejemplo, para acceder al valor agregado del formulario o verificar el estado de validación.
- **¿Cómo acceder a NgForm?** Simplemente puede obtener una referencia a la directiva ngForm de su formulario al exportarla a una variable de plantilla local y al usar la directiva ngForm como el valor de la variable (# myForm = ngForm).
