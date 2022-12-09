import { Injectable } from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FichefraisServiceService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  private unFrais: Fichefrais= new Fichefrais();

  constructor(private httpClient:HttpClient) {
    //on définit le header
    let httpHeader = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }


  getFicheFraisListe(id:number):Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/listeFrais/'+ id;
    return this.httpClient.get(this.ClientUrl);
  }

  private handleError(error:Response | any){
    let errMsg: string="";
    if (error instanceof  Response){
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    console.error(errMsg);
    return Promise.reject(error.message || error);
  }

  getFicheFrais(id:number):Observable<any>{
    this.ClientUrl= environment.ENDPOINT+'api/frais/getUnFrais/'+id;
    return this.httpClient.get(this.ClientUrl);
  }
  getFichefraisListe(id:number): Observable<any>
  {
    this.ClientUrl= environment.ENDPOINT+'api/frais/listeFrais/'+id;
    return this.httpClient.get(this.ClientUrl);
  }

  updateFrais(unFrais:Fichefrais):Observable<any>{
    this.ClientUrl= environment.ENDPOINT +'api/frais/updateFicheFrais';


    return this.httpClient.post(this.ClientUrl,JSON.stringify(unFrais));
  }

  deleteFrais(unFrais:Fichefrais):Observable<any>{
    this.ClientUrl= environment.ENDPOINT +'api/frais/deleteFicheFrais';


    return this.httpClient.post(this.ClientUrl,JSON.stringify(unFrais));
  }


  addFrais(unFrais:Fichefrais):Observable<any>{
    this.ClientUrl= environment.ENDPOINT +'api/frais/addFicheFrais';


    return this.httpClient.post(this.ClientUrl,JSON.stringify(unFrais));
  }


}
