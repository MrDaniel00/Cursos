import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'calculadora';

  resultadoPadre: number = 0;

  onResultado(resultado: number){
    this.resultadoPadre = resultado;


  }

}
