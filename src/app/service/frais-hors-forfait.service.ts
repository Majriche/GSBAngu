import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fichefrais} from "../metier/Fichefrais";
import {FraisHT} from "../metier/FraisHT";
import {environment} from "../../environments/environment";

const ENDPOINT=environment.ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class FraisHorsForfaitService {
  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  constructor(private HttpClient : HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'Cache-Control':'no-cache'
    });
  }


  getUnFraisHF(id:number):Observable<any>{
    this.ClientUrl=ENDPOINT+'api/frais/getUnFraishorsforfait/'+id;
    return this.HttpClient.get(this.ClientUrl);
  }

   getFichFraisHorsForfait(id:number):Observable<any>{
    this.ClientUrl=ENDPOINT+'api/frais/getListeHorsForfait/'+id;
    return this.HttpClient.get(this.ClientUrl);
  }

  ajoutFraisHT(unFraisHF:FraisHT):Observable<any>
  {
    this.ClientUrl=ENDPOINT+'api/frais/addFraisHorsForfait';
    return this.HttpClient.post(this.ClientUrl,JSON.stringify(unFraisHF));
  }

  deleteFraisHT(unFraisHF:FraisHT):Observable<any>
  {
    this.ClientUrl=ENDPOINT+'api/frais/deleteFicheFraisHF';
    return this.HttpClient.post(this.ClientUrl,JSON.stringify(unFraisHF));
  }

  updateFraisHF(unFraisHF:FraisHT):Observable<any>{
    this.ClientUrl=ENDPOINT+'api/frais/updateFicheFraisHF';
    return this.HttpClient.post(this.ClientUrl,JSON.stringify(unFraisHF));
  }

  validateMontant(idf:number,montant:number){
    this.ClientUrl=ENDPOINT+'api/frais/validateFraisMontant'
  }





}
