import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { GrupoInterface } from '../models/grupo';
import { AdminInterface } from '../models/admin';
import { MensajeInterface } from '../models/mensaje'

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  adminCollection: AngularFirestoreCollection<AdminInterface>

  // grupoCollection: AngularFirestoreCollection<GrupoInterface>
  
  // Declaracion de variables para enlazar con el modelo
  mensajeCollection: AngularFirestoreCollection<MensajeInterface>
  mensajeDoc: AngularFirestoreDocument<MensajeInterface>
  mensajes: Observable<MensajeInterface[]>
  mensaje: Observable<MensajeInterface>

  constructor(private afs: AngularFirestore) {
    this.adminCollection = this.afs.collection('administradores', ref => ref)
  }

  // Metodo para agregar mensajes
  addNewMensaje(mensaje: MensajeInterface, uid) {
    // this.adminCollection.doc(uid).collection('grupos').doc(uid).set(grupo);
    this.adminCollection.doc(uid).collection('grupos').doc(uid).collection('mensajes').add(mensaje);
  }

  // Metodo para obtener todos los msjs
  getAllMensajes(id: string): Observable<MensajeInterface[]> {
    console.log(id)
    this.mensajeCollection = this.afs.collection('administradores/' + id + '/grupos/' + id + '/mensajes', ref => ref)
    this.mensajes = this.mensajeCollection.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as MensajeInterface
          data.grupoId = action.payload.doc.id
          return data
        })
      })
    return this.mensajes
  }


}
