import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdminInterface } from '../models/admin';


@Component({
  selector: 'app-user-panel-lider',
  templateUrl: './user-panel-lider.component.html',
  styleUrls: ['./user-panel-lider.component.scss']
})
export class UserPanelLiderComponent implements OnInit {

  admins: AdminInterface[]

  idAdmin: string

  

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.allAdmins()
  }

  // onIngresarGrupo() {
  //   this.router.navigate(['/panelUser']);
  // }

  allAdmins() {
    this.authService.getAllAdminUserBd().subscribe(admins => {
      console.log(admins)
      this.admins = admins
    }) 
  }

}
