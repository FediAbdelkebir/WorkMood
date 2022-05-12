import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryOffer } from '../../Models/category-offer';
import { OfferBackService } from '../../Services/offer-back.service';

@Component({
  selector: 'app-add-offer-back',
  templateUrl: './add-offer-back.component.html',
  styleUrls: ['./add-offer-back.component.css']
})
export class AddOfferBackComponent implements OnInit {
  categoryOfferEnum: any = CategoryOffer;
  keys: string[] = [];
  selected!: CategoryOffer;

  constructor(private s: OfferBackService, private router: Router) {
    this.keys = Object.keys(this.categoryOfferEnum);
   }

  ngOnInit(): void {
  }

  //user: User = new User();
  
  save(f:any){
  let id= 1;
  //id= this.userService.getCurrentUser().getId();
  f.category = this.selected;
    this.s.addOffer(f,id).subscribe(
      ()=>{
        this.router.navigate(['Dashboard/Offers']);
      }
    );
  }

}
