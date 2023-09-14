import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ClientSeviceService } from '../client-sevice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private clientService: ClientSeviceService // Inyecta el servicio aquí
  ) {
    this.form = this.fb.group({
      correo_E: '',
      contraseña: ''
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      const correo_E = this.form.value.correo_E;
      const contraseña = this.form.value.contraseña;

      // Utiliza el método login del servicio para iniciar sesión
      this.clientService.login(correo_E, contraseña).subscribe(
        (response: any) => {
          console.log(response);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            color: '#222020',
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
          Toast.fire({
            icon: 'success',
            title: 'Iniciaste sesión con éxito'
          });
        },
        (error: any) => {
          console.log('Error de autenticación');
          this.errorMensaje = 'Credenciales inválidas. Por favor, verifique sus datos.';
        }
      );
    } else {
      console.log('Verifique sus datos');
      this.errorMensaje = 'Por favor, complete todos los campos.';
    }
  }
}
