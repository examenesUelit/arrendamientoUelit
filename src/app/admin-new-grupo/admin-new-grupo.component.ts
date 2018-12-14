import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GrupoService } from '../services/grupo.service';
import { Router } from '@angular/router';
import { GrupoInterface } from '../models/grupo';

@Component({
  selector: 'app-admin-new-grupo',
  templateUrl: './admin-new-grupo.component.html',
  styleUrls: ['./admin-new-grupo.component.scss']
})
export class AdminNewGrupoComponent implements OnInit {

  public userId
  public isLoginAdmin

  grupo: GrupoInterface = {
    grupoId: '',
    grupoName: '',
    userId: '',
    userEmail: ''
  }

  // En el metodo constructor se incializa para preguntar si el usuario esta logeado o no  
  constructor(private authService: AuthService, private grupoService: GrupoService, private router: Router) {
    this.authService.getAuth().subscribe(auth => {
      if (auth && auth.uid) {
        this.userId = this.authService.angularFireAuth.auth.currentUser.uid;
      }
      else
        this.isLoginAdmin = false
    }, error => console.log('isLoginAdmin is False' + error))
   }

  ngOnInit() {
  }

  // Metodo para guardar los datos en la base de datos
  onGuardarGrupo({ value }: { value: GrupoInterface }) {
    this.authService.getAuth().subscribe(user => {
      value.grupoId = (new Date()).getTime();
      value.userId = this.userId
      value.userEmail = user.email
      this.grupoService.addNewGrupo(value, value.userId)
    })
    this.router.navigate(['/panelAdminGrupos'])
  }

}
