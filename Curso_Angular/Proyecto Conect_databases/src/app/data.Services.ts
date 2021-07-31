import { Persona } from './persona.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServices{

constructor(private httpclient: HttpClient) {}


  //guardar personas

  guardarPersonas(personas: Persona[]){
    this.httpclient.put('https://listado-personas-df726-default-rtdb.firebaseio.com/datos.json',personas)

      .subscribe(Response =>
        console.log("resultado"+Response),
      error => console.log("error al guardar"+Response)


      );



      }

      CargarPersonas(){
        return this.httpclient.get('https://listado-personas-df726-default-rtdb.firebaseio.com/datos.json');
      }
}
