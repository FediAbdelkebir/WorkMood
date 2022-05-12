import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-delete-offer',
  templateUrl: './delete-offer.component.html',
  styleUrls: ['./delete-offer.component.css']
})
export class DeleteOfferComponent implements OnInit {

  id!:number;

  constructor(private activated: ActivatedRoute, private s: OfferService, private router: Router) { }

  ngOnInit(): void {
    this.delete();
  }

  delete(){
    this.id = this.activated.snapshot.params['id'];
    this.s.deleteOffer(this.id).subscribe(
      ()=>{
        this.router.navigate(['Offers']);
        //alert("ok");
      }
    );
  }

}
