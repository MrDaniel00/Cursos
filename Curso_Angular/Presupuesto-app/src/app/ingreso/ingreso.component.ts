import { IngresoServicio } from './ingreso.servicio';
import { ingreso } from './ingreso.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingreso: ingreso[]=[];


  constructor(private ingresoservicio: IngresoServicio ) { }

  ngOnInit() {
  this.ingreso = this.ingresoservicio.ingresos;
  }

  eliminarRegistro(ingreso: ingreso){
    this.ingresoservicio.eliminar(ingreso);

  }
}
