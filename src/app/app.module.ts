import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes Creados
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminNewMensajeComponent } from './admin-new-mensaje/admin-new-mensaje.component';
import { AdminMensajeComponent } from './admin-mensaje/admin-mensaje.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserPanelMensajesComponent } from './user-panel-mensajes/user-panel-mensajes.component';
import { AdminGruposComponent } from './admin-grupos/admin-grupos.component';
import { AdminNewGrupoComponent } from './admin-new-grupo/admin-new-grupo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginAdminRegistroComponent } from './login-admin-registro/login-admin-registro.component';

// Librerias de Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Libreria de Formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios Creados
import { AuthService } from './services/auth.service';
import { GrupoService } from './services/grupo.service';
import { MensajeService } from './services/mensaje.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SliderComponent,
    AdminPanelComponent,
    AdminUsersComponent,
    AdminNewMensajeComponent,
    AdminMensajeComponent,
    UserPanelComponent,
    UserPanelMensajesComponent,
    AdminGruposComponent,
    AdminNewGrupoComponent,
    NotFoundComponent,
    LoginAdminComponent,
    LoginAdminRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, GrupoService, MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
