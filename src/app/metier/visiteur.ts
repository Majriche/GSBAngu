import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

export class Visiteur
{
  public id_visiteur: number=0;
  public id_laboratoire: number=0;
  public id_secteur : number=0;
  public nom_visiteur: string="";
  public prenom_visiteur: string="";
  public adresse_visiteur: string="";
  public cp_visiteur: number=0;
  public ville_visiteur:string="";
  public date_embauche:Date=new Date('0000-00-00');
  public email:string="";
  public pwd_visiteur:string="";
  public type_visiteur:number=0;
  public login_visiteur:string="";


}
