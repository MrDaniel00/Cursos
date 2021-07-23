import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output()  resultadoSuma = new EventEmitter
  operandoA:number= 0;
  operandoB:number = 0;

  onsumar():void{
   let resultado = this.operandoA + this.operandoB;
   this.resultadoSuma.emit(resultado);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
