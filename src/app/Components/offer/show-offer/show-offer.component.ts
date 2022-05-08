import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/Services/offer.service';
import { saveAs } from 'file-saver';
import { throwError } from 'rxjs';
import { Offer } from 'src/app/Models/offer';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent implements OnInit {

  id!: number;
  offer!: any;
  similarOffers!: Offer[];

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
        items: 4
      }
    },
    nav: true
  }

  constructor(private s: OfferService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
    this.allSimilarOffers();
  }

  getById(){
    this.id=this.activate.snapshot.params['id'];
    this.s.showById(this.id).subscribe(
      (d)=>{
        this.offer=d;
      }
    );
  }

  getCoupon(){
    
    var mediaType = 'application/pdf';
    console.log("btnnnnnn")
    let idUser= 1;
    this.id=this.activate.snapshot.params['id'];
    this.s.getCoupon().subscribe((response) => {
      var blob = new Blob([response], { type: mediaType });
      saveAs(blob, 'report.pdf');
  },
  e => { throwError(e); }); //idUser,this.id
   
    
  }

  
  allSimilarOffers(){
    let idUser = 1;
    console.log("idOffer",this.id);
    this.s.findSimilarOffers(18, idUser).subscribe(
      (e)=>{
        console.log("idOffer"+this.id);
        this.similarOffers=e;
      }
    );
  }

}
 