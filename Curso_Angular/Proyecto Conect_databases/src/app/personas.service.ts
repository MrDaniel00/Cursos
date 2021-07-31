import { DataServices } from './data.services';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
    personas: Persona[] = [ ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService,
                private dataservice :DataServices){}


    setPersonas(personas: Persona[]){
      this.personas = personas;
    }


    ObtenerPersonas(){
      return this.dataservice.CargarPersonas();

    }


    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.toString());
        if(this.personas== null){
          this.personas= [];
        }

        this.personas.push(persona);
        this.dataservice.GuardarPersonas(this.personas);
    }

    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        this.loggingService.enviaMensajeAConsola("persona encontrada:" + persona.toString());
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        this.loggingService.enviaMensajeAConsola("persona a modificar:" + persona.toString() + " con indice:" + index);
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataservice.modificarPersona(index,persona);
    }

    eliminarPersona(index:number){
        this.loggingService.enviaMensajeAConsola("eliminar persona con indice: " + index);
        this.personas.splice(index,1);
        this.dataservice.eliminarPersona(index);
        this.modificarPersonas();
    }

    modificarPersonas(){
       if(this.personas !== null){
         this.dataservice.GuardarPersonas(this.personas);

       }
    }
}

