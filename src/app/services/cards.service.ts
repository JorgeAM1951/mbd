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

  getAllCards(name?:string, sort?:string) {
    if(name){
    return new Promise<any>((resolve) => {
      this.db.collection('cartas', ref => ref.where('name','==',name)).valueChanges({idfield: 'id'}).subscribe(cards =>  resolve(cards))
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
  
  
  createCard(newId:any, name: string, colors:Array<string>, types: string, image: string, stats: string, description: string): void{
    this.db.collection('cartas').doc(newId).set({name:name,colors:colors,types:types,card_image:image, stats:stats, description:description});
    console.log("Created card")
  }
}
