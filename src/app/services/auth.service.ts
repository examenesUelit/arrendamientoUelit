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

  // Declaracion de variables para enlazar con el modelo
  usuarioCollection: AngularFirestoreCollection<UsuarioInterface>
  usuarioDoc: AngularFirestoreDocument<UsuarioInterface>
  usuarios: Observable<UsuarioInterface[]>
  usuario: Observable<UsuarioInterface>

  // Declaracion de variables para enlazar con el modelo
  adminCollection: AngularFirestoreCollection<AdminInterface>
  adminDoc: AngularFirestoreDocument<AdminInterface>
  admins: Observable<AdminInterface[]>
  admin: Observable<AdminInterface>

  // inicializacion de variables para enlazar con el modelo
  user: UsuarioInterface = {
    userId: '',
    userName: '',
    userEmail: '',
    userTipoUser: ''
  }

  // inicializacion de variables para enlazar con el modelo
  userAdmin: AdminInterface = {
    userId: '',
    userName: '',
    userEmail: '',
    userTipoUser: ''
  }

  // Metodo constructor. Aqui se creanron las instacias de las colecciones en firebase
  constructor(public angularFireAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.usuarioCollection = this.afs.collection('usuarios', ref => ref)
    this.adminCollection = this.afs.collection('administradores', ref => ref)
  }

  // Metodo para agregar usuario
  addUserBd(usuario: UsuarioInterface, uid) {
    this.usuarioCollection.ref.doc(uid).set(usuario)
  }

  // Metodo para agregar administradores
  addAdminUserBd(usuario: AdminInterface, uid) {
    this.adminCollection.ref.doc(uid).set(usuario)
  }

  // Metodo para obtener todos los administradorews
  getAllAdminUserBd(): Observable<AdminInterface[]> {
    this.admins = this.adminCollection.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as AdminInterface
          data.userId = action.payload.doc.id
          return data
        })
      })
    return this.admins
  }

  // getAllMensajes(id: string): Observable<MensajeInterface[]> {
  //   console.log(id)
  //   this.mensajeCollection = this.afs.collection('administradores/' + id + '/grupos/' + id + '/mensajes', ref => ref)
  //   this.mensajes = this.mensajeCollection.snapshotChanges()
  //     .map(changes => {
  //       return changes.map(action => {
  //         const data = action.payload.doc.data() as MensajeInterface
  //         data.grupoId = action.payload.doc.id
  //         return data
  //       })
  //     })
  //   return this.mensajes
  // }

  // Metodo de acceso con correo y pwd
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

  // Metodo de registro con correo y pwd
  public registro = (nombre, apellidos, email, pwd) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pwd)
      .then((response) => {
        console.log('Usuario registrado con exito');
        console.log(response)
        this.user = {
          userId: response.user.uid,
          userName: nombre + ' ' + apellidos,
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

  // Metodo para obtener email de usuairo
  public getEmail() {
    return this.angularFireAuth.auth.currentUser.email;
  }

  // Metodo de logueo con Google
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
        this.router.navigate(['/panelUserLider']);
        console.log(result)
      })
      .catch(error => console.log(error))
  }

  // Metodo de logueo con Facebook
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
        this.router.navigate(['/panelUserLider']);
      })
      .catch((error) => console.log(error))
  }

// Metodo para veroificar que el usuario esta activo
  getAuth() {
    return this.angularFireAuth.authState.map(auth => auth)
  }

  // Metodo la logout de usuairo
  logout() {
    return this.angularFireAuth.auth.signOut();
  }

}
