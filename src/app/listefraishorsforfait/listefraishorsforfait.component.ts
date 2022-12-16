import {Component, OnInit} from '@angular/core';
import {FraisHT} from "../metier/FraisHT";
import {FraisHorsForfaitService} from "../service/frais-hors-forfait.service";
import {ActivatedRoute, Router} from "@angular/router";
import {generate} from "rxjs";

@Component({
  selector: 'app-listefraishorsforfait',
  templateUrl: './listefraishorsforfait.component.html',
  styleUrls: ['./listefraishorsforfait.component.css']
})
export class ListefraishorsforfaitComponent implements OnInit {

  public mesFraisHT!: FraisHT[];
  public visiteurid!: number;
  public titre!: string;
  public id !: number;
  public error !: string;
  public montantTotal!: number;
  public idFrais !: number;
  public unFraisHT !: FraisHT;

  constructor(private unSHF: FraisHorsForfaitService,
              private activatedRoute: ActivatedRoute, private unRouteur: Router) {
  }

  ngOnInit(): void {
    this.error = '';
    this.montantTotal = 0;
    let item = localStorage.getItem('id');
    this.id = Number(item);
    this.titre = 'Liste des frais Hors Forfait du visiteur ' +this.id;
    let test =this.activatedRoute.snapshot.paramMap.get('id');
    this.visiteurid=Number(test);
    this.getListeFraisHorsForfait(this.visiteurid);
  }


  calculMontant(): void {
    for (let i=0; i<this.mesFraisHT.length;i++)
    {
      let unFHF:FraisHT=this.mesFraisHT[i];
      this.montantTotal=this.montantTotal+(unFHF.montant_fraishorsforfait*1.0);
    }
  }

  ajouterFraisHorsForfait():void{
    this.unRouteur.navigate(['AjouterFraisHT/'+this.idFrais])
  }

  modifier(id:number):void{
    this.unRouteur.navigate(['modifierFraisHF/'+id]);
  }

  supprimer(id:number):void{
    this.unFraisHT=new FraisHT();
    this.unFraisHT.id_fraishorsforfait=id;
    this.unSHF.deleteFraisHT(this.unFraisHT).subscribe(
      ()=>{

      },
      (error)=>{
        this.error=error.messages;
      }


    );
    this.unRouteur.navigate(['/accueil'])
  }

  getListeFraisHorsForfait(id:number):void{
    this.unSHF.getFichFraisHorsForfait(id).subscribe(
      (mesFHT)=>{
        this.mesFraisHT=mesFHT;
        this.idFrais=this.mesFraisHT[0].id_frais;
        this.calculMontant();
      },
      (error)=>{
        this.error=error.messages;
        alert(error.messages);
      }
    )
  }


}
