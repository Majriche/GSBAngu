import { Component, OnInit } from '@angular/core';
import {FraisHT} from "../metier/FraisHT";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FraisHorsForfaitService} from "../service/frais-hors-forfait.service";
import {normalizeExtraEntryPoints} from "@angular-devkit/build-angular/src/webpack/utils/helpers";

@Component({
  selector: 'app-fiche-frais-hf',
  templateUrl: './fiche-frais-hf.component.html',
  styleUrls: ['./fiche-frais-hf.component.css']
})
export class FicheFraisHFComponent implements OnInit {

  public unFraisHF!:FraisHT;
  public fraishfid!:number;
  public titre!:string;
  public error :string='';
  public id!:number;


  constructor(private unFHF:FraisHorsForfaitService,private activatedRoute:ActivatedRoute,private unRouteur:Router) { }

  ngOnInit(): void {
    let test=this.activatedRoute.snapshot.paramMap.get('id')
    this.fraishfid=Number(test);
    this.getFicheFraisHT(this.fraishfid);
    this.titre+= 'Modification d\'un frais hors forfait '+this.fraishfid;

  }



  getFicheFraisHT(id:number):void{
    this.unFHF.getUnFraisHF(id).subscribe(
      (unfraisHF)=>{
        this.unFraisHF=unfraisHF;
      },
      (error)=>{
        this.error=error.messages;
      }
    )
  }

  annuler() {
    alert(this.unFraisHF);
    alert(this.fraishfid)
  }






}
