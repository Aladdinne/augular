import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  nom!: string;
  email!: string;
  type!: string;
  numero!: string;
  date!: string;
  code!: string;
  addForm(F:NgForm){
  console.log(F);
  }
  
  onSubmit(){}
}

