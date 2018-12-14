import { Component, OnInit } from '@angular/core';
import { GrupoInterface } from '../models/grupo';
import { GrupoService } from '../services/grupo.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MensajeInterface } from '../models/mensaje';
import { MensajeService } from '../services/mensaje.service';

@Component({
  selector: 'app-admin-new-mensaje',
  templateUrl: './admin-new-mensaje.component.html',
  styleUrls: ['./admin-new-mensaje.component.scss']
})
export class AdminNewMensajeComponent implements OnInit {

  mensaje: MensajeInterface = {
    idMensaje: '',
    tituloMensaje: '',
    mensajeName: '',
    prioridadMensaje: '',
    grupoId: '',
    userId: '',
    userEmail: ''
  }

  grupos: GrupoInterface[]

  public userId: string;
  public isLoginAdmin: boolean = false;

  // En el metodo constructor se incializa para preguntar si el usuario esta logeado o no
  constructor(private mensajeService: MensajeService, private grupoService: GrupoService, private authService: AuthService, private router: Router) {
    this.authService.getAuth().subscribe(auth => {
      if (auth && auth.uid) {
        this.userId = this.authService.angularFireAuth.auth.currentUser.uid;
        this.allGrupos()
      }
      else
        this.isLoginAdmin = false
    }, error => console.log('isLoginAdmin is False' + error))
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // Metodo para obtener todos los grupos
  allGrupos() {
    this.grupoService.getAllGrupos(this.userId).subscribe(grupos => {
      console.log(grupos)
      this.grupos = grupos
    })
  }

  // Metodo para guardar los datois en la base de satos
  onGuardarMensaje({ value }: { value: MensajeInterface }) {
    this.authService.getAuth().subscribe(user => {
      value.idMensaje = (new Date()).getTime();
      value.userId = this.userId
      value.userEmail = user.email
      this.mensajeService.addNewMensaje(value, value.userId)
      // this.grupoService.addNewGrupo(value, value.userId)
    })
    this.router.navigate(['/panelAdminMensaje'])
  }

}
