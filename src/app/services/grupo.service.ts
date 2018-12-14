import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GrupoInterface } from '../models/grupo';
import { AdminInterface } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  // Declaracion de variables para enlazar con el modelo
  adminCollection: AngularFirestoreCollection<AdminInterface>

  // Declaracion de variables para enlazar con el modelo
  grupoCollection: AngularFirestoreCollection<GrupoInterface>
  grupoDoc: AngularFirestoreDocument<GrupoInterface>
  grupos: Observable<GrupoInterface[]>
  grupo: Observable<GrupoInterface>

  constructor(private afs: AngularFirestore) {
    // Sirve pero crea una nueva coleccion
    // this.grupoCollection = this.afs.collection('grupos', ref => ref)
    this.adminCollection = this.afs.collection('administradores', ref => ref)
    // Crea una nueva Coleccion dentro de administradores
  }

  // Metodo para agregar grupos
  addNewGrupo(grupo: GrupoInterface, uid) {
    //  Sirve pero crea una nueva coleccion
    // this.grupoCollection.ref.doc(uid).set(grupo)
    // this.grupoCollection.add(grupo);
    this.adminCollection.doc(uid).collection('grupos').doc(uid).set(grupo);
    //  Crea una nueva coleccion dentro de administradores
  }

  // Metodo para obtener todfos los grupos
  getAllGrupos(id: string): Observable<GrupoInterface[]> {
    console.log(id)
    this.grupoCollection = this.afs.collection('administradores/' + id + '/grupos', ref => ref)
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

  // getOne(idUser: string) {
  //   this.adminDoc = this.afs.doc<AdminInterface>(`administradores/${idUser}`)
  //   this.admin = this.adminDoc.snapshotChanges()
  //     .map(action => {
  //       if (action.payload.exists === false)
  //         return null
  //       else {
  //         const data = action.payload.data() as AdminInterface
  //         data.userId = action.payload.id
  //         return data
  //       }
  //     })
  //   return this.admin
  // }

  // getAllGrupos(): Observable<GrupoInterface[]> {
  //   this.grupos = this.grupoCollection.snapshotChanges()
  //     .map(changes => {
  //       return changes.map(action => {
  //         const data = action.payload.doc.data() as GrupoInterface
  //         data.userId = action.payload.doc.id
  //         return data
  //       })
  //     })
  //   return this.grupos
  // }

}
