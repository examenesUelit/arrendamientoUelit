import { Component, OnInit } from '@angular/core';
import { GrupoInterface } from '../models/grupo';
import { GrupoService } from '../services/grupo.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-grupos',
  templateUrl: './admin-grupos.component.html',
  styleUrls: ['./admin-grupos.component.scss']
})
export class AdminGruposComponent implements OnInit {

  grupos: GrupoInterface[]

  public userId: string;
  public isLoginAdmin: boolean = false;

  // En el metodo constructor se incializa para preguntar si el usuario esta logeado o no
  constructor(private grupoService: GrupoService, private authService: AuthService) {
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

  // Metodo para obtener todos los usuarios
  allGrupos() {
    this.grupoService.getAllGrupos(this.userId).subscribe(grupos => {
      console.log(grupos)
      this.grupos = grupos
    })
  }

}
