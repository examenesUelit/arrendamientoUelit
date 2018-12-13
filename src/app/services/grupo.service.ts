import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GrupoInterface } from '../models/grupo';
import { AdminInterface } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  adminCollection: AngularFirestoreCollection<AdminInterface>

  grupoCollection: AngularFirestoreCollection<GrupoInterface>
  grupoDoc: AngularFirestoreDocument<GrupoInterface>
  grupos: Observable<GrupoInterface[]>
  grupo: Observable<GrupoInterface>

  constructor(private afs: AngularFirestore) {
    this.adminCollection = this.afs.collection('administradores', ref => ref)
    // this.grupoCollection = this.afs.collection('grupos', ref => ref)  
    // Sirve pero crea una nueva coleccion
  }

  addNewGrupo(grupo: GrupoInterface, uid) {
    // this.grupoCollection.ref.doc(uid).set(grupo)  Sirve pero crea una nueva coleccion
    this.adminCollection.doc(uid).collection('grupos').add(grupo);
  }

  getAllGrupos(id: string): Observable<GrupoInterface[]> {
    this.grupoCollection = this.afs.collection('administradores/' + id + '/grupos', ref => ref)
    console.log(id)
    this.grupos = this.grupoCollection.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as GrupoInterface
          data.grupoId = action.payload.doc.id
          return data
        })
      })
    return this.grupos
  }



}
