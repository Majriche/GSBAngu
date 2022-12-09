import { Component, OnInit } from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";
import {FichefraisServiceService} from "../service/fichefrais-service.service";
import { Router} from "@angular/router";
import { HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  public mesFrais: Fichefrais[]= [];
  private error: string="";
  private id: number=0;
  public titre: string="";
  private unFrais: Fichefrais= new  Fichefrais();

  constructor(private unFS: FichefraisServiceService, private unRouteur: Router) {
    let httpheader = new HttpHeaders({
      'content-type':'application/json',
      'Cache-contol':'no-cache'
    })
  }

  ngOnInit(): void {
    let item = localStorage.getItem('id');
    //@ts-ignore
    this.id = Number.parseInt(item);
    this.titre ='Liste des frais du visiteur ' + this.id;
    this.getFicheFraisListe(this.id);
  }

  getFicheFraisListe(id:number): void  {
    this.unFS.getFicheFraisListe(id).subscribe(
      (Fichefrais)=>{
        this.mesFrais = Fichefrais;
      },
      (error)=>{
        this.error=error.messages;
      }
    )

  }

  supprimer(unFrais:Fichefrais):void {
    this.unFS.deleteFrais(unFrais).subscribe(
      ()=>{

      },
      (error)=>{
        this.error=error.messages;
      }
    );
    if (this.error!='')
    alert("Erreur survenue : "+this.error)
  else
    alert("Suppression réussie ! ")
    this.unRouteur.navigate(['/accueil']);


  }

  modifier(id_frais: number) :void{
  this.unRouteur.navigate(['/modifierFrais/'+id_frais]);
  }
}
