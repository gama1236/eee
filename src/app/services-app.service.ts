import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})

export class ServicesAppService {

  constructor( private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) { }

  /**
   * Metodo para registrar un usuario
   * @param user 
   */
  registerUser(user) {
    if (typeof(user) === 'object') {
      return new Promise((resolve, reject) => {
        const {correo, contra} = user;
        this.afDatabase.list('users').push(user);
        this.afAuth.auth.createUserWithEmailAndPassword(correo, contra)
          .then( userData => resolve(userData),
            err => reject(err));
      });
    }
   }

   /**
    * Metodo para loguear 
    * @param user 
    */

   login(user) {
     if (typeof (user) === 'object') {
       return new Promise((resolve, reject) => {
          const {correo, contra} = user;
          
          this.afAuth.auth.signInWithEmailAndPassword(correo, contra)
          .then( userData => resolve(userData),
          err => reject(err));
       });
     }
   }


}
