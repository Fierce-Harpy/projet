import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user';

import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajouter-medecin',
  templateUrl: './ajouter-medecin.component.html',
  styleUrls: ['./ajouter-medecin.component.css']
})
export class AjouterMedecinComponent implements OnInit {


  
  medecin!: User;

  constructor(private route : ActivatedRoute,
     private userService : UserService, 
     private router : Router) { }

  ngOnInit(): void {

    this.medecin = new User ( 0,0,'','','',0);
    const id = this.route.snapshot.params['id'];

    this.userService.getSingleMedecin(+id)?.telephone;
    this.userService.getSingleMedecin(+id)?.email;
    this.userService.getSingleMedecin(+id)?.number;
    this.userService.getSingleMedecin(+id)?.etat;
    this.userService.getSingleMedecin(+id)?.nom;
    this.userService.getSingleMedecin(+id)?.id;
  }

 



}