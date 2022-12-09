import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Fichefrais} from "../metier/Fichefrais";
import {Etat} from "../metier/Etat";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EtatServiceService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  private unEtat: Etat= new Etat();

  constructor(private httpClient:HttpClient) {
    //on définit le header
    let httpHeader = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getListeEtat():Observable<any>{
    this.ClientUrl=environment.ENDPOINT+'api/frais/listeEtat';
    return this.httpClient.get(this.ClientUrl);
  }





}
