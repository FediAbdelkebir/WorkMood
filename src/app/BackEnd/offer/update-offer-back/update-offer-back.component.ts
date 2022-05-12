import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../Models/offer';
import { CategoryOffer } from '../../Models/category-offer';
import { OfferBackService } from '../../Services/offer-back.service';

@Component({
  selector: 'app-update-offer-back',
  templateUrl: './update-offer-back.component.html',
  styleUrls: ['./update-offer-back.component.css']
})
export class UpdateOfferBackComponent implements OnInit {

  id!: number;
  offer!: any;
  
  categoryOfferEnum: any = CategoryOffer;
  keys: string[] = [];
  selected!: CategoryOffer;

  constructor(private s:OfferBackService, private activated: ActivatedRoute, private router: Router) {
    this.keys = Object.keys(this.categoryOfferEnum);

  }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.id=this.activated.snapshot.params['id'];
    this.s.showById(this.id).subscribe(
      (d)=>{
        this.offer=d;
      }
    );
  }

  save(f: Offer){
    f.category = this.selected;
    this.s.updateOffer(f, this.id).subscribe(
      ()=>{
        this.router.navigate(['Dashboard/Offers']);
      }
    );
  }

}
