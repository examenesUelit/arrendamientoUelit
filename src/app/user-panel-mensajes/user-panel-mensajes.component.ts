import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../services/mensaje.service';
import { AuthService } from '../services/auth.service';
import { MensajeInterface } from '../models/mensaje';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-panel-mensajes',
  templateUrl: './user-panel-mensajes.component.html',
  styleUrls: ['./user-panel-mensajes.component.scss']
})
export class UserPanelMensajesComponent implements OnInit {

  mensajes: MensajeInterface[]

  public userId: string;
  public isLoginAdmin: boolean = false;

  idMensaje: string

  constructor(private mensajeService: MensajeService, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.userId = this.authService.angularFireAuth.auth.currentUser.uid;
        this.allMensajes()
        this.getDetallesMensaje()
      }
      else
        this.isLoginAdmin = false
    }, error => console.log('isLoginAdmin is False' + error))
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // Metodo para obtener el detalle de mensajes
  getDetallesMensaje() {
    this.idMensaje = this.activatedRoute.snapshot.params['id']
    //  console.log("--"+ this.idGrupo);
    console.log("Mensajes" + this.idMensaje)
    this.mensajeService.getAllMensajes(this.idMensaje).subscribe(mensaje => this.mensajes = mensaje)
    //  this.grupoService.getAllGrupos(this.idGrupo).subscribe(grupo => this.grupos = grupo)
  }

  // Metodo para obtener todos mensajes
  allMensajes() {
    this.mensajeService.getAllMensajes(this.userId).subscribe(mensajes => {
      console.log(mensajes)
      this.mensajes = mensajes
    })
  }

}
