import { Personas } from "./personas.model";

export class PersonasServices{
  Personas: Personas[] =[new Personas("Juan", "perez"),new Personas("Laura","Juares")];

  agregarPersona(Personas: Personas){
    this.Personas.push(Personas);

  }
}
