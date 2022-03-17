import { MenuService } from './services/menu.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SuperdocWelcomeComponent } from './superdoc-welcome/superdoc-welcome.component';
import { FirstcComponent } from './firstc/firstc.component';
import { HttpClientModule } from '@angular/common/http';
import { ListmedecinsComponent } from './components/listmedecins/listmedecins.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AjouterMedecinComponent } from './components/ajouter-medecin/ajouter-medecin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedecinFormComponent } from './components/medecin-form/medecin-form.component';


const appRoutes : Routes = [
  {path: 'superdocwelcpage', component : SuperdocWelcomeComponent},
  {path: 'firstc', component : FirstcComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'listmedecins', component : ListmedecinsComponent},
  {path: '', component : AjouterMedecinComponent},
  {path: 'ajouterMedecin', component : MedecinFormComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SuperdocWelcomeComponent,
    FirstcComponent,
    ListmedecinsComponent,
    AjouterMedecinComponent,
    MedecinFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
