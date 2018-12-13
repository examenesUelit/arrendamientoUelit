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

  grupo: GrupoInterface = {
    grupoId: '',
    grupoName: '',
    userId: '',
    userEmail: ''
  }

  constructor(private authService: AuthService, private addProducto: GrupoService, private router: Router) { }

  ngOnInit() {
  }

  onGuardarGrupo({ value }: { value: GrupoInterface }) {
    this.authService.getAuth().subscribe(user => {
      value.userId = user.uid
      value.userEmail = user.email
      this.addProducto.addNewGrupo(value, value.userId)
    })
    this.router.navigate(['/panelAdminGrupos'])
  }

}
