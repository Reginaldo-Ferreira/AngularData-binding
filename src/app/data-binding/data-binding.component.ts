import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.google.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
 
  nomedoCurso: string = 'Angular';

  nome: string = 'abc';
  valorIncial = 15;//valor para o app outPut-property
  
  getValor() { return 1; }

  getCurtirCurso() { return true; }

  onMudouValor(evento){
    //value
    //valor
   // console.log("[resultado externo] o valor do evento {{ "+ evento.valor +" }}");
   console.log(evento.mudouValor );
  }

  constructor() { }

  ngOnInit() {
  }


}
