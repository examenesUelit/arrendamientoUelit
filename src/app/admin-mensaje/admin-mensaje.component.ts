import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../services/mensaje.service';
import { AuthService } from '../services/auth.service';
import { MensajeInterface } from '../models/mensaje';

@Component({
  selector: 'app-admin-mensaje',
  templateUrl: './admin-mensaje.component.html',
  styleUrls: ['./admin-mensaje.component.scss']
})
export class AdminMensajeComponent implements OnInit {

  mensajes: MensajeInterface[]

  public userId: string;
  public isLoginAdmin: boolean = false;

  // En el metodo constructor se incializa para preguntar si el usuario esta logeado o no

  constructor(private mensajeService: MensajeService, private authService: AuthService) {
    this.authService.getAuth().subscribe(auth => {
      if (auth && auth.uid) {
        this.userId = this.authService.angularFireAuth.auth.currentUser.uid;
        this.allMensajes()
      }
      else
        this.isLoginAdmin = false
    }, error => console.log('isLoginAdmin is False' + error))
   }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // Metodo para obtener todos los mensajes
  allMensajes() {
    this.mensajeService.getAllMensajes(this.userId).subscribe(mensajes => {
      this.mensajes = mensajes
    })
  }

}
