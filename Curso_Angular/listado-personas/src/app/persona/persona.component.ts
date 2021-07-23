import { Personas } from './../personas.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  @Input() Personas: Personas = " hola mundo";
  @Input() indice : number = 0;


  ngOnInit(): void {
  }

}
