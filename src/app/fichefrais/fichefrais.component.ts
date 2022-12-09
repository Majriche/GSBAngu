import {Component, OnInit} from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {FichefraisServiceService} from "../service/fichefrais-service.service";
import {Observable} from "rxjs";
import {Etat} from "../metier/Etat";
import {EtatServiceService} from "../service/etat-service.service";

@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {

  public unFrais: Fichefrais = new Fichefrais();
  public fraisid: number = 0;
  public titre: string = "Modification d'un frais";
  public paramMap: ParamMap[] = [];
  public error: string = '';
  public unEtat: Etat = new Etat;
  public mesEtat: Etat[] = [];

  constructor(private unES: EtatServiceService  ,private unFS: FichefraisServiceService,
              private activatedRoute: ActivatedRoute, private unRouteur: Router) {


  }

  ngOnInit() {
    // @ts-ignore
    this.fraisid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getFichefrais(this.fraisid);
    this.getEtat();

  }

  getFichefrais(id: number): void {

    this.unFS.getFicheFrais(id).subscribe(
      (Fichefrais) => {
        this.unFrais = Fichefrais;
      },
      (error) => {
        this.error = error.messages;
      }
    )
  }
  getEtat():void  {
    this.unES.getListeEtat().subscribe(
      (mesEtats)=>{
        this.mesEtat =mesEtats;
      },
      (error)=>{
        this.error=error.messages;
      }
    )
  }

  annuler() {
    this.unRouteur.navigate(['/Listefichefrais'])
  }

  valider(): void {
    this.unFS.updateFrais(this.unFrais).subscribe(
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


}
