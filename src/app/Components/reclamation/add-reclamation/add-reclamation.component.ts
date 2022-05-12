import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css'],
})
export class AddReclamationComponent implements OnInit {
  constructor(private s: ReclamationService, private router: Router) {}

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
