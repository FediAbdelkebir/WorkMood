import { Component, OnInit } from '@angular/core';
import { CategoryOffer } from 'src/app/Models/category-offer';
import { Offer } from 'src/app/Models/offer';
import { OfferService } from 'src/app/Services/offer.service';
import {RouterModule,RouterLink, Router} from '@angular/router';
@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css']
})
export class MyOffersComponent implements OnInit {
  offers!: Offer[];
  categoryOfferEnum: any = CategoryOffer;
  keys: string[] = [];
  category!: CategoryOffer;

  constructor(private s: OfferService,private router: Router) {
    this.keys = Object.keys(this.categoryOfferEnum);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    let idUser=1;
    this.s.findOfferByUsers(idUser).subscribe(
      (d)=>{
        this.offers=d;
      }
    );
  }

  getByCategory(c: CategoryOffer){
    let idUser=1;
    this.s.findOfferByUserByCategory(c, idUser).subscribe(
      (e)=>{
        this.offers=e;
      }
    );
  }
  onChange(){
    let idUser=1;
    this.s.findOfferByUserByCategory(this.category, idUser).subscribe(
      (e)=>{
        this.offers=e;
      }
    )
  }

  sortByDateAsc(){
    let idUser=1;
    this.s.findOfferByUserByDateExpAsc(idUser).subscribe(
      (e)=>{
        this.offers=e;
      }
    );
  }
  sortByDateDesc(){
    let idUser=1;
    this.s.findOfferByUserByDateExpDesc(idUser).subscribe(
      (e)=>{
        this.offers=e;
      }
    );
  }
  sortByPointAsc(){
    let idUser=1;
    this.s.findOfferByUserByPointAsc(idUser).subscribe(
      (e)=>{
        this.offers=e;
      }
    );
  }
  sortByPointDesc(){
    let idUser=1;
    this.s.findOfferByUserByPointDesc(idUser).subscribe(
      (e)=>{
        this.offers=e;
      }
    );
  }

}
