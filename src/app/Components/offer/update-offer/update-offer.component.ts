import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/Models/offer';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  id!: number;
  offer!: any;

  constructor(private s:OfferService, private activated: ActivatedRoute, private router: Router) { }

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
    this.s.updateOffer(f, this.id).subscribe(
      ()=>{
        alert('good');
        this.router.navigate(['Offers']);
      }
    );
  }

}
