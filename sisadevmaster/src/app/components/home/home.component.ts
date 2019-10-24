import { Component, OnInit } from '@angular/core'; /* 👶🏼 */
/* Para formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Para manejo de rutas */
import { Router } from '@angular/router';

/* Para nuestro servicio */
import { authenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginUserForm: FormGroup;
  responseAuthentication: any;

    constructor(    private formBuilder: FormBuilder,
                    private router: Router,
                    private objAuthenticationService: authenticationService ) { }

    ngOnInit() {
      // jquinteros76
      // ON1A0LAH
      this.loginUserForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginUserForm.controls; }

    onSubmitLogin() {
        this.objAuthenticationService
                          .login(this.loginUserForm.value.username, this.loginUserForm.value.password)
                          .subscribe( (data: any) => {
                            if (data.length === 0 ) {
                              // [] vacío cuando el usuario no existe
                              this.responseAuthentication = 'Usuario o contraseña invalido';
                            } else {
                              // [ {} ] cuando el usuario existe
                              /*
                              *  1. Debo crear el localStorage para por pasar al usuario por las diferentes vistas.
                              *  Luego ya en cada vista traigo la info de usuario previamente almacenado en el localStorage
                              *  userDevmaster: Es la variable que tendre la info de mi localStorage
                              */
                              localStorage.setItem('userDevmaster', JSON.stringify(data));
                              switch (data[0].userTypeId) {
                                case 1:
                                  // Redireccionamiento
                                  this.router.navigate(['/administrador']);
                                  break;
                                case 2:
                                  // Redireccionamiento
                                  this.router.navigate(['/docente']);
                                  break;
                                default:
                                  // Redireccionamiento
                                  this.router.navigate(['/estudiante']);
                                  break;
                              }
                            }
                          });
    }
}
