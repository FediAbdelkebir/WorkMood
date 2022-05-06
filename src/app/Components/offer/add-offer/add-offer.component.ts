import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryOffer } from 'src/app/Models/category-offer';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  categoryOfferEnum: any = CategoryOffer;
  keys: string[] = [];
  selected!: CategoryOffer;

  constructor(private s: OfferService, private router: Router) {
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
        alert('added.');
        this.router.navigate(['Offers']);
      }
    );
  }

}
