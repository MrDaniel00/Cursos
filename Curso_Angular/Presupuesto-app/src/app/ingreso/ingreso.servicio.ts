import { ingreso } from "./ingreso.module";

export class IngresoServicio{
    ingresos: ingreso[]=[
      new ingreso("salario", 4000),
      new ingreso("venta carro", 50000)
    ]

eliminar(ingreso:ingreso){
   const indice: number = this.ingresos.indexOf(ingreso);
   this.ingresos.splice(indice,1);
}
}
