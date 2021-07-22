import { Component } from "@angular/core";

 @Component({
   selector:'app-personas',
   templateUrl: './personas.component.html',
   styleUrls :[ './personas.Component.css' ]

 })
 export class PersonasComponent{

  AgregarPersonas=false;
  agregarPersonaStatus="no se ha agregado a nadies";
  tituloPersona="Ingrese un nombre ";
  personaCreada= false;


    constructor(){
      setTimeout(()=>{
        this.AgregarPersonas= true;
      }
      ,
        3000)

    }

    onCrearPersonas(){
      this.personaCreada =true;
      this.agregarPersonaStatus="Persona Agregada";
    }
    onModificarPersona(event: Event){
      this.tituloPersona= (<HTMLInputElement>event.target).value;

    }

 }
