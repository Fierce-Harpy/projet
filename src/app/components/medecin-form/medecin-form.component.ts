import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user';

import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-medecin-form',
  templateUrl: './medecin-form.component.html',
  styleUrls: ['./medecin-form.component.css']
})
export class MedecinFormComponent implements OnInit {

  medecinForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.medecinForm = this.formBuilder.group({
      telephone: ['', Validators.required],
      email : ['', [Validators.required], Validators.email],
      number: ['', Validators.required],
      etat: ['', Validators.required],
      nom: ['', Validators.required],
      id: ['', Validators.required],
    });
  }
  onSaveMedecin(){
    
      const telephone = this.medecinForm.get('telephone')?.value;
      const email = this.medecinForm.get('email')?.value;
      const number = this.medecinForm.get('number')?.value;
      const etat = this.medecinForm.get('etat')?.value;
      const nom = this.medecinForm.get('nom')?.value;
      const id = this.medecinForm.get('id')?.value;

      const newMedecin = new User(telephone,email,number,etat,nom,id);

      this.userService.addMedecin(newMedecin)
    this.router.navigate(['/superdocwelcpage']);
  }

  annuler(){
    this.router.navigate(['/superdocwelcpage']);
  }


}
