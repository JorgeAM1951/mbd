import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';                                                            
import { User } from '../models';


@Injectable({ providedIn: 'root' }) 
export class UserService{
  

  constructor(
    private db:AngularFirestore,

  ){
    
  }

  login(username:string, passwd:string): Promise<User[]> {
    
    return new Promise<any>((resolve) => {
      this.db.collection('User', ref => ref.where('username','==',username).where('password', '==', passwd)).valueChanges({idfield: 'id'}).subscribe(user =>  resolve(user))
    }) as Promise<User[]>

    
    
  }
}

