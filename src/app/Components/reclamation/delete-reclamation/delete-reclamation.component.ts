import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-delete-reclamation',
  templateUrl: './delete-reclamation.component.html',
  styleUrls: ['./delete-reclamation.component.css']
})
export class DeleteReclamationComponent implements OnInit {

  id!: number;

  constructor(private s: ReclamationService, private activated: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.delete();
  }

  delete(){
    this.id = this.activated.snapshot.params['id'];
    this.s.deleteReclamation(this.id).subscribe(
      ()=>{
        //alert('Reclamation deleted.');
        this.router.navigate(['Reclamations']);
      }
    );
  }

}
