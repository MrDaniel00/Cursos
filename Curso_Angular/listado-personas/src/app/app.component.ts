import { AppModule } from './app.module';
import { Component } from '@angular/core';
import { Personas } from './personas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de personas';
  Personas: Personas[] =[new Personas("Juan", "perez"),new Personas("Laura","Juares")];

  nombreInput: string ="";
  ApellidoInput:string="";

  onAgregarPersona(){
    let persona1 = new Personas(this.nombreInput, this.ApellidoInput );
    this.Personas.push(persona1)
  }

}
