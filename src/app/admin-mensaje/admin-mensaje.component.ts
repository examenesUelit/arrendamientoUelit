import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-mensaje',
  templateUrl: './admin-mensaje.component.html',
  styleUrls: ['./admin-mensaje.component.scss']
})
export class AdminMensajeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
