import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/models';
import { CardsService } from 'src/app/services/cards.service';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  card?: Card;
  cardName: string | undefined;
  routeSub: Subscription | undefined;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private cardsService: CardsService) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.cardName = params['name'];
      this.getCardInfo(this.cardName as string);
    });
  }

  getCardInfo(name: string): void {
    this.cardsService.getCardInfo(name).then(res => {
      this.card = res[0];
      console.log(this.card);
    })
    
  }

}
