import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyQuestion } from 'src/app/Models/survey-question';
import { SurveyService } from 'src/app/Services/survey.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {

  constructor(private ms : SurveyService, private router: Router) { }

  ngOnInit(): void {
    //  this.addSurvey(ss:SurveyQuestion);
    
  }

  addSurvey(ss:SurveyQuestion){   
   let id= 1;
    this.ms.addSurvey(ss,id).subscribe(res => {
      // this.router.navigate(['affichersurvey'])
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Question has been saved',
        showConfirmButton: false,
        timer: 3000
      })
    });

  }

  // gett(o: any) {
  //     Swal.fire({
  //       title: '<strong>Do you want to Confirm this  ?</strong>',
  //       icon: 'error',
  //       showCancelButton: true,
  //       cancelButtonText: 'Cancel',
  //       focusConfirm: true,
  //       confirmButtonText: 'Confirm',
  //       confirmButtonColor: '#1fb79b',
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         this.ms.addSurvey(o,o.id).subscribe((d) => {
  //           () => {
  //             console.log("test");
              
  //             Swal.fire('Succes to send review with Email!', '', 'success');
              
  //           };
  //         });
        
  //       }
  //     });
  //   }


    
}
