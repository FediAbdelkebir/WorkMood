import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/Services/offer.service';
import { saveAs } from 'file-saver';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent implements OnInit {

  id!: number;
  offer!: any;

  constructor(private s: OfferService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
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

}
 