import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientSeviceService {
  private nombreUsuario: string = '';
  private userEmail: string = '';
  private iniciadoSesion: boolean = false;
  private apiUrl = 'https://back-youtube.onrender.com';

  constructor(private http: HttpClient) {}

  login(correo_E: string, contraseña: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { correo_E, contraseña };
    return this.http.post(url, body).pipe(
      tap((response: any) => {
        this.setNombreUsuario(response.usuario.nombre_usuario);
        this.setUserEmail(response.usuario.correo_E);
      })
    );
  }

  setNombreUsuario(nombre: string): void {
    console.log("Nombre de usuario configurado:", nombre);
    this.nombreUsuario = nombre;
    this.iniciadoSesion = true;
  }

  getNombreUsuario(): string {
    return this.nombreUsuario;
  }

  setUserEmail(correo: string): void {
    console.log("Correo electrónico configurado:", correo);
    this.userEmail = correo;
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  cerrarSesion(): void {
    this.nombreUsuario = '';
    this.userEmail = '';
    this.iniciadoSesion = false;
  }

  haIniciadoSesion(): boolean {
    return this.iniciadoSesion;
  }
}
