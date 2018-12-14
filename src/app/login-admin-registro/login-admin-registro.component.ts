import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-admin-registro',
  templateUrl: './login-admin-registro.component.html',
  styleUrls: ['./login-admin-registro.component.scss']
})
export class LoginAdminRegistroComponent implements OnInit {

  registro:any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // Metodo para el rewgistro de administradores
  registrar() {
    // this.AutorizacionService.registro(this.registro.email, this.registro.pwd);
    this.authService.registro(this.registro.nombre, this.registro.apellidos, this.registro.email, this.registro.pwd)
  }

}
