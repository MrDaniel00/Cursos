import { Egreso } from './../egreso/egreso.module';
import { ingreso } from './../ingreso/ingreso.module';
import { EgresoServicio } from './../egreso/egreso.servicio';
import { IngresoServicio } from './../ingreso/ingreso.servicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  descripcionInput:string;
  valorInput: number;
  tipo:string="ingresoOperacion";
  constructor(private ingresoServicio : IngresoServicio,
              private egresoServicio: EgresoServicio) { }

  ngOnInit() {
  }
  tipoOperacion(evento){

      this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo == "ingresoOperacion")
      this.ingresoServicio.ingresos.push(new  ingreso(this.descripcionInput, this.valorInput));
      else
      this.egresoServicio.egreso.push(new Egreso(this.descripcionInput,this.valorInput));


  }

}