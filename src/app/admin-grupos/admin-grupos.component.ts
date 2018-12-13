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

  public userNombre: string;
  public userEmail: string;
  public userPicture: string;
  public userId: string;
  public isLogin: boolean = false;
  public isLoginAdmin: boolean = false;
  public provaider: string;
  public adminEmail: string;

  constructor(private grupoService: GrupoService, private authService: AuthService) {
    this.authService.getAuth().subscribe(auth => {
      if (auth && auth.uid) {
        this.isLoginAdmin = true;
        this.adminEmail = authService.getEmail();
        this.userId = auth.uid
      }
      else
        this.isLoginAdmin = false
    }, error => console.log('isLoginAdmin is False' + error))
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.allGrupos()
  }

  allGrupos() {
    this.grupoService.getAllGrupos(this.userId).subscribe(grupos => {
      console.log(grupos)
      // this.grupos = grupos
    })
  }

}
