import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  offers!: Offer[];
  categoryOfferEnum: any = CategoryOffer;
  keys: string[] = [];
  category!: CategoryOffer;
  id!: number;
  similarOffers!: Offer[];

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

  allSimilarOffers(){
    let idUser = 1;
    console.log(this.id);
    this.s.findSimilarOffers(this.id, idUser).subscribe(
      (e)=>{
        console.log("idOffer"+this.id);
        this.similarOffers=e;
      }
    );
  }

}
