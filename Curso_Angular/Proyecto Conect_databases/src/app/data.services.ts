import { Persona } from './persona.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataServices{
   constructor(private httpclient: HttpClient){}

   GuardarPersonas(personas: Persona[]){

    this.httpclient.put('https://listado-personas-df726-default-rtdb.firebaseio.com/datos.json',personas)
    .subscribe(
      Response =>console.log("guardado"+Response),
      error => console.log("error"+error)
    );
   }

   CargarPersonas(){
     return this.httpclient.get('https://listado-personas-df726-default-rtdb.firebaseio.com/datos.json')

    }
}

