import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { promises } from 'fs';
import { Observable } from 'rxjs';
import { Card } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private db: AngularFirestore) { 
  }

  getAllCards(sort?:string) {
    if(sort){
    return new Promise<any>((resolve) => {
      this.db.collection('cartas', ref => ref.orderBy(sort)).valueChanges({idfield: 'id'}).subscribe(cards =>  resolve(cards))
    }) as Promise<Card[]> 
    } else {
      return new Promise<any>((resolve) => {
        this.db.collection('cartas').valueChanges({idfield: 'id'}).subscribe(cards =>  resolve(cards))
      }) as Promise<Card[]>
    }
  } 

  getCardInfo(name:string) {
    return new Promise<any>((resolve) => {
      this.db.collection('cartas', ref => ref.where('name','==',name)).valueChanges({idfield: 'id'}).subscribe(cards =>  resolve(cards))
    }) as Promise<Card[]>
  }
  
  
  getId(){
    let ref = this.db.collection('cartas');
    return ref.valueChanges({idField: 'id'});
  }
}
