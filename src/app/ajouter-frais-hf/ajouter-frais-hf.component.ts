import {Component, OnInit} from '@angular/core';
import {FraisHT} from "../metier/FraisHT";
import {FraisHorsForfaitService} from "../service/frais-hors-forfait.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-frais-hf',
  templateUrl: './ajouter-frais-hf.component.html',
  styleUrls: ['./ajouter-frais-hf.component.css']
})
export class AjouterFraisHFComponent implements OnInit {

  public unFraisHT: FraisHT = new FraisHT();
  public fraisid!: number;
  public titre: string = 'Ajout d\'un Frais Hors Forfait';
  public error: string = '';

  constructor(private unFHF: FraisHorsForfaitService, private activatedRoute: ActivatedRoute
    , private unRouteur: Router) {
  }

  ngOnInit(): void {
    let idTemp = this.activatedRoute.snapshot.paramMap.get('id');
    this.fraisid = Number(idTemp);
    this.titre += ' ' + this.fraisid;
  }

  valider() {
    this.unFraisHT.id_frais = this.fraisid;

    this.unFHF.ajoutFraisHT(this.unFraisHT).subscribe(
      () => {

      },
      (error) => {
        this.error = error.messages;
      }
    );
    if (this.error != '') {
      alert("Erreur survenue" + this.error);
    } else {
      alert("Ajout réussi");
      this.unRouteur.navigate(['/accueil']);
    }


  }


  annuler() {
    this.unFraisHT.id_frais = this.fraisid;
    this.unFraisHT.lib_fraishorsforfait='aaaa'
    console.log(this.unFraisHT.id_frais);
    console.log(this.unFraisHT.date_fraishorsforfait);
    console.log(this.unFraisHT.lib_fraishorsforfait);
    console.log(this.unFraisHT.id_fraishorsforfait);
    console.log(this.unFraisHT.montant_fraishorsforfait);

  }

}
