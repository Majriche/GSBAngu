import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import { Fichefrais} from "./metier/Fichefrais";
import {FichefraisComponent} from "./fichefrais/fichefrais.component";
import {AjoutFicheFraisComponent} from './ajout-fiche-frais/ajout-fiche-frais.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {ListefraishorsforfaitComponent} from "./listefraishorsforfait/listefraishorsforfait.component";
import {AjouterFraisHFComponent} from "./ajouter-frais-hf/ajouter-frais-hf.component";
import {FicheFraisHFComponent} from "./fiche-frais-hf/fiche-frais-hf.component";

const routes: Routes = [
  {path:'', redirectTo: '/connexion',pathMatch:'full'},
  {path:'connexion', component: ConnexionComponent},
  {path:'Listefichefrais',component:ListefichefraisComponent},
  {path:'modifierFrais/:id', component:FichefraisComponent},
  {path:'ajouterFrais', component:AjoutFicheFraisComponent},
  {path:'accueil', component:NavbarComponent},
  {path:'ListeFicheHorsForfait/:id',component:ListefraishorsforfaitComponent},
  {path:'AjouterFraisHT/:id',component:AjouterFraisHFComponent},
  {path:"modifierFraisHF/:id",component:FicheFraisHFComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
