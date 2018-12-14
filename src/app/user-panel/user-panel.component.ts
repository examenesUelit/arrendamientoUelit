import { Component, OnInit } from '@angular/core';
import { GrupoInterface } from '../models/grupo';
import { GrupoService } from '../services/grupo.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  grupos: GrupoInterface[]

  idGrupo: string;

  public userId: string;
  public isLoginAdmin: boolean = false;

  // En el metodo constructor se incializa para preguntar si el usuario esta logeado o no
  constructor(private grupoService: GrupoService, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.userId = this.authService.angularFireAuth.auth.currentUser.uid;
        this.allGrupos()
        this.getDetallesGrupo()
      }
      else
        this.isLoginAdmin = false
    }, error => console.log('isLoginAdmin is False' + error))
  }

  ngOnInit() {
  }

  getDetallesGrupo() {
     this.idGrupo = this.activatedRoute.snapshot.params['id']
    //  console.log("--"+ this.idGrupo);
      this.grupoService.getAllGrupos(this.idGrupo).subscribe(grupo => this.grupos = grupo)
   }

  //  Metodo para obtener todos los grupos
  allGrupos() {
    this.grupoService.getAllGrupos(this.userId).subscribe(grupos => {
      console.log(this.userId)
      console.log("Grupos de USErPANEL" + grupos)
      this.grupos = grupos
    })
  }



}
