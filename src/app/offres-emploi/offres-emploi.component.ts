import { Component } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent {
  listeEmploi:Emploi[]=[
    {reference:"1",titre:"Développeur web",entreprice:"ISEWEB",etat:true },
    {reference:"2",titre:"Ingénieur logiciel",entreprice:"E-GOV",etat:false },
    {reference:"3",titre:"Ingénieur de données",entreprice:"CRBT",etat:true },
    {reference:"4",titre:"Administrateur système",entreprice:"TDS",etat:false },
  ]
  n!:number;
  entrep!:string;

  postuler(){}
  
  calculer(){
    this.n=0;
    for (let index = 0; index < this.listeEmploi.length; index++) {
      if (this.listeEmploi[index].etat == true) {
        this.n++;
      }
    }
    return this.n;
    
  }
}