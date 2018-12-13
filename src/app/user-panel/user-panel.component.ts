import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onIngresarGrupo() {
    this.router.navigate(['/panelUserMensaje']);
  }

}
