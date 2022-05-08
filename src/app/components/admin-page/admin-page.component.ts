import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Card } from 'src/app/models';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {


  colors: Array<string> = [];
  color: string = "";
  name: string = "";
  types: string = "";
  card_image: string = "";
  stats: string = "";
  description: string = "";


    constructor(private cardService: CardsService) { 
    }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.colors = this.color.split("/");
    this.cardService.createCard("453", this.name, this.colors, this.types, this.card_image, this.stats, this.description)


  }

}
