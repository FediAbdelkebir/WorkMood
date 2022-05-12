import { Component, OnInit } from '@angular/core';
import { CategoryOffer } from '../../Models/category-offer';
import { Offer } from '../../Models/offer';
import { OfferBackService } from '../../Services/offer-back.service';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-offers-back',
  templateUrl: './list-offers-back.component.html',
  styleUrls: ['./list-offers-back.component.css'],
})
export class ListOffersBackComponent implements OnInit {
  offers!: Offer[];
  categoryOfferEnum: any = CategoryOffer;
  keys: string[] = [];
  category!: CategoryOffer;
  offer!: any;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
  searchText!:any;
  constructor(private s: OfferBackService, private router: Router) {
    this.keys = Object.keys(this.categoryOfferEnum);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.s.listOffers().subscribe((d) => {
      this.offers = d;
      console.log(this.offers);
    });
  }

  getById(o: any) {
    Swal.fire({
      title: '<strong>Do you want to delete this offer ?</strong>',
      icon: 'error',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      focusConfirm: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#1fb79b',
    }).then((result) => {
      if (result.isConfirmed) {
        this.s.deleteOffer(o.idOffer).subscribe((d) => {
          () => {
            Swal.fire('Deleted!', '', 'success');
            
          };
        });
       window.location.reload();
      }
    });
  }

  getByCategory(c: CategoryOffer) {
    console.log(c);
    this.s.findByCategory(c).subscribe((e) => {
      this.offers = e;
      console.log(e);
    });
  }
  onChange() {
    this.s.findByCategory(this.category).subscribe((e) => {
      this.offers = e;
      console.log(this.category);
    });
  }

  sortByDateAsc() {
    this.s.findOfferByDateExpAsc().subscribe((e) => {
      this.offers = e;
      console.log(e);
    });
  }
  sortByDateDesc() {
    this.s.findOfferByDateExpDesc().subscribe((e) => {
      this.offers = e;
      console.log(e);
    });
  }
  sortByPointAsc() {
    this.s.findOfferByPointAsc().subscribe((e) => {
      this.offers = e;
      console.log(e);
    });
  }
  sortByPointDesc() {
    this.s.findOfferByPointDesc().subscribe((e) => {
      this.offers = e;
      console.log(e);
    });
  }
}
