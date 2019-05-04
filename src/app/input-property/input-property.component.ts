import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
 // inputs:['nomeCuroso:nome']// pode ser chamado assim tambem
  //['nomeCuroso:nome'] sendo o 1° variavel, 2° nome da propiedade
})
//o template onde <app-curso> foi importado para o data-binding
export class InputPropertyComponent implements OnInit {

  //nomeCurso: string = ''; para no casso de declaração no decorat @Component
  //@Input('nome') nomeCurso: string = '';

  //  @Input() nome: string = ''; o código escrito assim tambem funciona
  //dentro do @Input() posso passar um paramentro para SER uma propriedade 
  @Input('nome') nomeCurso: string = '';
 

  constructor() { }

  ngOnInit() {
  }

}
