import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { Component, OnInit, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Injectable()

@Component({
  selector: 'app-superdoc-welcome',
  templateUrl: './superdoc-welcome.component.html',
  styleUrls: ['./superdoc-welcome.component.css']
})


export class SuperdocWelcomeComponent implements OnInit {

  listUsers: User[]= [];
  

  displayedColumns: string[] = ['modifier','telephone','email','etat ','number','nom','id'];

  dataSource! : MatTableDataSource<any>;


  constructor(private userService:UserService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.chargeUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  chargeUsers(){
    this.listUsers=this.userService.getUser();
    this.dataSource= new MatTableDataSource(this.listUsers);
  }

  deleteUsers(index:number){
    this.userService.removeUsers(index);
    
    this.chargeUsers();

    this._snackBar.open('تم حذف المستخدم بنجاح', '', {
      duration:1500,
      horizontalPosition : 'center',
      verticalPosition: 'bottom'
    })

  }

  ajouterMedecin(){
    this.router.navigate(['/ajouterMedecin']);
  }


  editUsers(index:number){

  }


}
