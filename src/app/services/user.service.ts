import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' }) 
export class UserService{
  userData: Observable<firebase.User>;

  constructor(
    private db:AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ){
    this.userData = angularFireAuth.authState;
  }

  login(username:string, passwd:string): boolean {
    this.angularFireAuth.signInWithEmailAndPassword(username, passwd).then(res => {
      console.log('Logged in correctly')
      return true;
    }).catch((err: { message: any; }) => {
      console.log('Login failed: ', err.message)
      return false;
    });
    return false;
    

    
    
  }
}

