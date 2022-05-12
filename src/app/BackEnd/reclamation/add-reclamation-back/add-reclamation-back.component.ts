import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationBackService } from '../../Services/reclamation-back.service';

@Component({
  selector: 'app-add-reclamation-back',
  templateUrl: './add-reclamation-back.component.html',
  styleUrls: ['./add-reclamation-back.component.css']
})
export class AddReclamationBackComponent implements OnInit {

  constructor(private s: ReclamationBackService, private router: Router) {}

  ngOnInit(): void {}

  save(f: any) {
    let id = 1;
    //id= this.userService.getCurrentUser().getId();
    this.s.addReclamation(f, id).subscribe(() => {
      //alert('Reclamation added.');
      this.router.navigate(['Reclamations']);
    });
  }

}
