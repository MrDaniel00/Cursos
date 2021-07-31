import { Persona } from './../persona.model';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService,
              private router: Router,
              private route:ActivatedRoute
              ){}

    ngOnInit(): void {
     this.personasService.ObtenerPersonas()
     .subscribe(
       (personas: Persona[]) =>{
         this.personas = personas;
         this.personasService.setPersonas(personas);
       }
     )
    }

    irAgregar(){
      console.log("nos vamos a agregar ");
      this.router.navigate(['./personas/agregar'],{queryParams:{modoEdicion:0}});
    }
}
