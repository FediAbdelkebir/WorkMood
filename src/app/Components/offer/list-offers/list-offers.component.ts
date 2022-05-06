import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoryOffer } from 'src/app/Models/category-offer';
import { Offer } from 'src/app/Models/offer';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent implements OnInit {

  offers!: Offer[];
  categoryOfferEnum: any = CategoryOffer;
  keys: string[] = [];
  category!: CategoryOffer;

  constructor(private s: OfferService) {
    this.keys = Object.keys(this.categoryOfferEnum);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.s.listOffers().subscribe(
      (d)=>{
        this.offers=d;
        console.log(this.offers)
      }
    );
  }

  getByCategory(c: CategoryOffer){
    console.log(c);
    this.s.findByCategory(c).subscribe(
      (e)=>{
        this.offers=e;
        console.log(e);
        
      }
    );
  }
  onChange(){
    this.s.findByCategory(this.category).subscribe(
      (e)=>{
        this.offers=e;
        console.log(this.category);
      }
    )
  }

  sortByDateAsc(){
    this.s.findOfferByDateExpAsc().subscribe(
      (e)=>{
        this.offers=e;
        console.log(e);
        
      }
    );
  }
  sortByDateDesc(){
    this.s.findOfferByDateExpDesc().subscribe(
      (e)=>{
        this.offers=e;
        console.log(e);
        
      }
    );
  }
  sortByPointAsc(){
    this.s.findOfferByPointAsc().subscribe(
      (e)=>{
        this.offers=e;
        console.log(e);
      }
    );
  }
  sortByPointDesc(){
    this.s.findOfferByPointDesc().subscribe(
      (e)=>{
        this.offers=e;
        console.log(e);
      }
    );
  }

}
