import { LoggingService } from './../LoggingService.service';
import { AppModule } from './app.module';
import { Component, OnInit } from '@angular/core';
import { Personas } from './personas.model';
import { PersonasServices } from './personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'listado de personas';
  Personas: Personas[] =[];

  constructor(private LoggingService: LoggingService,
    private personasService: PersonasServices){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


 onPersonaAgregada(persona:Personas){
   this.personasService.agregarPersona(persona);

 }



}
