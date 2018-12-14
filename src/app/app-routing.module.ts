// Componentes que tienen ritas
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminNewMensajeComponent } from './admin-new-mensaje/admin-new-mensaje.component';
import { AdminMensajeComponent } from './admin-mensaje/admin-mensaje.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminGruposComponent } from './admin-grupos/admin-grupos.component';
import { AdminNewGrupoComponent } from './admin-new-grupo/admin-new-grupo.component';
import { UserPanelMensajesComponent } from './user-panel-mensajes/user-panel-mensajes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginAdminRegistroComponent } from './login-admin-registro/login-admin-registro.component';
import { UserPanelLiderComponent } from './user-panel-lider/user-panel-lider.component';

// Listado de Rutas
const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'inico', component: SliderComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'panelAdmin', component: AdminPanelComponent },
  { path: 'panelAdminGrupos', component: AdminGruposComponent },
  { path: 'panelAdminNewGrupo', component: AdminNewGrupoComponent },
  { path: 'panelAdminUsers', component: AdminUsersComponent },
  { path: 'panelAdminMensaje', component: AdminMensajeComponent },
  { path: 'panelAdminNewMensage', component: AdminNewMensajeComponent },
  { path: 'panelUser/:id', component: UserPanelComponent },
  { path: 'panelUserLider', component: UserPanelLiderComponent },
  { path: 'panelUserMensaje/:id', component: UserPanelMensajesComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'loginAdminRegistro', component: LoginAdminRegistroComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
