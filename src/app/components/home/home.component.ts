import { Component, HostListener, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Card } from 'src/app/models';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string | undefined;
  public cards: Array<Card> = [];
  constructor(
    private cardsService:CardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['card-search']){
        this.searchCards(params['card-search']);
      } else {
        this.searchCards();
      }
    })
  }



  async searchCards(sort?:string){
      this.cards = []
      let cardList = await this.cardsService.getAllCards(sort);
      console.log(cardList);
      cardList.forEach(element => this.cards.push(element));
      /*let allCards = await this.cardsService.getAllCards();
      console.log(allCards)*/
  }

  @HostListener("click") openCardInfo(name: string): void{
    this.router.navigate(['card-info', name]);
  }


}
