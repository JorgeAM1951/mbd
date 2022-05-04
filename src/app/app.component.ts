import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

}
