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

- crear el modelo
