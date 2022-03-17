import { User } from './../../interfaces/user';
import { UserService } from './../../services/user.service';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-listmedecins',
  templateUrl: './listmedecins.component.html',
  styleUrls: ['./listmedecins.component.css']
})
export class ListmedecinsComponent implements OnInit {

  listUsers: User[]= [];
  

  displayedColumns: string[] = ['modifier','telephone','number','email ','etat','nom','id'];

  dataSource! : MatTableDataSource<any>;


  constructor(private userService:UserService) { }

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

  }
  editUsers(index:number){

  }

}
