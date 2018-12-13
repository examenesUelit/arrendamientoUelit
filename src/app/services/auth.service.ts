import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { UsuarioInterface } from '../models/user';
import { AdminInterface } from '../models/admin';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioCollection: AngularFirestoreCollection<UsuarioInterface>
  usuarioDoc: AngularFirestoreDocument<UsuarioInterface>
  usuarios: Observable<UsuarioInterface>
  usuario: Observable<UsuarioInterface>

  adminCollection: AngularFirestoreCollection<AdminInterface>
  adminDoc: AngularFirestoreDocument<AdminInterface>
  admins: Observable<AdminInterface>
  admin: Observable<AdminInterface>

  user: UsuarioInterface = {
    userId: '',
    userName: '',
    userEmail: '',
    userTipoUser: ''
  }

  userAdmin: AdminInterface = {
    userId: '',
    userName: '',
    userEmail: '',
    userTipoUser: ''
  }

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.usuarioCollection = this.afs.collection('usuarios', ref => ref)
    this.adminCollection = this.afs.collection('administradores', ref => ref)
  }

  addUserBd(usuario: UsuarioInterface, uid) {
    this.usuarioCollection.ref.doc(uid).set(usuario)
  }

  addAdminUserBd(usuario: UsuarioInterface, uid) {
    this.adminCollection.ref.doc(uid).set(usuario)
  }

  public login = (email, pwd) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, pwd)
      .then((response) => {
        console.log('Sesión iniciada');
        console.log(response)
        this.router.navigate(['/panelAdmin']);
      })
      .catch((error) => {
        alert('Existe un error');
        console.log(error);
      })
  };

  public registro = (nombre, apellidos, email, pwd) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pwd)
      .then((response) => {
        console.log('Usuario registrado con exito');
        console.log(response)
        this.user = {
          userId: response.user.uid,
          userName: nombre + apellidos,
          userEmail: email,
          userTipoUser: response.additionalUserInfo.providerId
        }
        this.addAdminUserBd(this.user, this.user.userId)

        this.router.navigate(['/panelAdmin']);
      })
      .catch((error) => {
        alert('Existe un error');
        console.log(error);
      })
  };

  public getEmail() {
    return this.angularFireAuth.auth.currentUser.email;
  }

  loginGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log('Sesión iniciada con Google');
        this.user = {
          userId: result.user.uid,
          userName: result.user.displayName,
          userEmail: result.user.email,
          userTipoUser: result.additionalUserInfo.providerId
        }
        this.addUserBd(this.user, this.user.userId)
        this.router.navigate(['/panelUser']);
        console.log(result)
      })
      .catch(error => console.log(error))
  }

  facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        console.log('Sesión iniciada con Facebook');
        this.user = {
          userId: result.user.uid,
          userName: result.user.displayName,
          userEmail: result.user.email,
          userTipoUser: result.additionalUserInfo.providerId
        }
        this.addUserBd(this.user, this.user.userId)
        this.router.navigate(['/panelUser']);
      })
      .catch((error) => console.log(error))
  }

  getAuth() {
    return this.angularFireAuth.authState.map(auth => auth)
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }

}
