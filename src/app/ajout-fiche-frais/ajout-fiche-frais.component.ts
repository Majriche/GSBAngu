import { Component, OnInit } from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";
import {EtatServiceService} from "../service/etat-service.service";
import {FichefraisServiceService} from "../service/fichefrais-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajout-fiche-frais',
  templateUrl: './ajout-fiche-frais.component.html',
  styleUrls: ['./ajout-fiche-frais.component.css']
})
export class AjoutFicheFraisComponent implements OnInit {

  public unFrais : Fichefrais = new Fichefrais();
  public titre: string = "Ajout d'un frais";
  public valeur !: string;
  public error:string ='';



  constructor(private unES: EtatServiceService  ,private unFS: FichefraisServiceService,
              private activatedRoute: ActivatedRoute, private unRouteur: Router) { }

  ngOnInit(): void {
  }

  valider(): void {

    let valeur=localStorage.getItem('id');
    this.unFrais.id_visiteur=Number(valeur);
    this.unFrais.datemodification= new Date('0000-00-00');


    this.unFS.addFrais(this.unFrais).subscribe(
      () => {
      },
      (error) => {
        this.error = error.messages;
      }
    );
    if (this.error!='')
      alert("Erreur survenue : "+this.error)
    else
      alert("Modification réussie ! ")
    this.unRouteur.navigate(['/Listefichefrais']);




  }
  annuler():void {
    this.unRouteur.navigate(['/accueil'])
  }

}
