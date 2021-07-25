import { LoggingService } from './../../LoggingService.service';
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
   constructor(private LoggingService:LoggingService){


   }
  ngOnInit(){

  }

  onAgregarPersona(){
    let persona1 = new Personas(this.nombreInput, this.ApellidoInput );
   this.LoggingService.enviaMensajeAConsola("Hola mundo"+ persona1);
    this.personaCreada.emit(persona1);
  }

}
