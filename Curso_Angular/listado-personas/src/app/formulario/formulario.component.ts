import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personas } from '../personas.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada =  new EventEmitter<Personas>();
  nombreInput: string ="";
  ApellidoInput:string="";

  ngOnInit(){

  }

  onAgregarPersona(){
    let persona1 = new Personas(this.nombreInput, this.ApellidoInput );
   this.personaCreada.emit(persona1);
  }

}
