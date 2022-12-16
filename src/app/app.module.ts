import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { FichefraisComponent } from './fichefrais/fichefrais.component';
//import { AjoutfichefraisComponent } from './ajoutfichefrais/ajoutfichefrais.component';
//import { ConnexionComponent } from './connexion/connexion.component';
import {HttpClientModule} from "@angular/common/http";
import {Visiteur} from "./metier/visiteur";
import {FichefraisServiceService} from "./service/fichefrais-service.service";
import { ConnexionComponent } from './connexion/connexion.component';
import { FichefraisComponent } from './fichefrais/fichefrais.component';
import { AjoutFicheFraisComponent } from './ajout-fiche-frais/ajout-fiche-frais.component';
import { ListefraishorsforfaitComponent } from './listefraishorsforfait/listefraishorsforfait.component';
import { AjouterFraisHFComponent } from './ajouter-frais-hf/ajouter-frais-hf.component';
import { FicheFraisHFComponent } from './fiche-frais-hf/fiche-frais-hf.component';
//import { FichefraisComponentComponent } from './fichefrais-component/fichefrais-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListefichefraisComponent,
    NavbarComponent,
    ConnexionComponent,
    FichefraisComponent,
    AjoutFicheFraisComponent,
    ListefraishorsforfaitComponent,
    AjouterFraisHFComponent,
    FicheFraisHFComponent,
   // FichefraisComponentComponent,
   // FichefraisComponent,
   // AjoutfichefraisComponent,
    //ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    FichefraisServiceService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
