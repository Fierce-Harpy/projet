import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InitialComponent } from './initial/initial.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InitialComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule

  ]
})
export class DashboardModule { }
