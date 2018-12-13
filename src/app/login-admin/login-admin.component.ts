import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  loginParams:any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  login() {
    this.authService.login(this.loginParams.email, this.loginParams.pwd);
    // this.AutorizacionService.login(this.loginParams.email, this.loginParams.pwd);
  }

}
