import { Egreso } from './egreso.module';
export class EgresoServicio{
   egreso : Egreso[]=[

    new Egreso("renta", 100),
    new Egreso ("ropa",2000)
   ]

   eliminar(egreso:Egreso){
     const indice: number = this.egreso.indexOf(egreso);
     this.egreso.splice(indice, 1);
   }

}
