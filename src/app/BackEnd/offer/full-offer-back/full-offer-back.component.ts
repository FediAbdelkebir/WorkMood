import { Component, OnInit } from '@angular/core';
import { Offer } from '../../Models/offer';
import { OfferBackService } from '../../Services/offer-back.service';

@Component({
  selector: 'app-full-offer-back',
  templateUrl: './full-offer-back.component.html',
  styleUrls: ['./full-offer-back.component.css']
})
export class FullOfferBackComponent implements OnInit {

  fulloffers!: Offer[];

  constructor(private s: OfferBackService) { }

  ngOnInit(): void {
    this.fullOffers();
  }

  fullOffers(){
    this.s.findFullOffers().subscribe(
      (d) => {
        this.fulloffers = d;
      console.log(this.fulloffers);
    });
  }

}
