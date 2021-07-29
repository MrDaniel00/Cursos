import { EgresoServicio } from './egreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { Egreso } from './egreso/egreso.module';
import { ingreso } from './ingreso/ingreso.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos:ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresoservicio:IngresoServicio,
    private egresoservicio:EgresoServicio){
      this.ingresos = ingresoservicio.ingresos;
      this.egresos = egresoservicio.egreso;

  }

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal +=  ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal +=  egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();

  }
  getPresupuestoTotal(){
    return this.getIngresoTotal()- this.getEgresoTotal();
  }

}
