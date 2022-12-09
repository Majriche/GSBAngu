import { Injectable } from '@angular/core';
import {Visiteur} from "../metier/visiteur";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ServiceVisiteurService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  constructor(private httpClient:HttpClient) {
    //on définit le header
    let httpHeader = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getLogin(unV:Visiteur):Observable<any>
  {
    this.ClientUrl= environment.ENDPOINT+'api/getConnexion';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));

  }


}
