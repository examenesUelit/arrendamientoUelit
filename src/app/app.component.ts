import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'examArrendamiento';

  public userNombre: string;
  public userEmail: string;
  public userPicture: string;
  public userId: string;
  public isLogin: boolean = false;
  public isLoginAdmin: boolean = false;
  public provaider: string;
  public adminEmail: string;

  constructor(private authService: AuthService) {
    this.authService.getAuth().subscribe(auth => {
      if (auth && auth.uid) {
        this.isLoginAdmin = true;
        this.adminEmail = authService.getEmail();
      }
      else
      this.isLoginAdmin = false
    }, error => console.log('isLoginAdmin is False' + error))
  }

  ngOnInit() {
    this.onComprobarUserLogin()
  }

  onComprobarUserLogin() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.userNombre = auth.displayName;
        this.userEmail = auth.email;
        this.userPicture = auth.photoURL;
        this.userId = auth.uid;
        this.provaider = auth.providerData[0].providerId
      } else
        this.isLogin = false;
    })
  }

  onLogout() {
    this.authService.logout();
  }


}
