import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  
  nome: string = 'abc';

  pessoa: any = {
    nome: 'reginaldo',
    idade: 37,
    end:{
      sq:'13',
       q: '8',
       casa:35
    } 
  }
  /* end:{
      sq:'13',
       q: '8',
       casa:35
    } */

    botaoClicado() {
      alert('Botão clicado!');
    }
  
    salvarValor(valor) {
      this.valorSalvo = valor;
    }
  
    onMouseOverOut() {
      this.isMouseOver = !this.isMouseOver;
    }
  
    onKeyUp(event: KeyboardEvent) {
      //console.log((<HTMLInputElement>evento.target).value);
      //console.log((<HTMLInputElement>evento.target).value);
      this.valorAtual = (<HTMLInputElement>event.target).value;
    }
  constructor() { }

  ngOnInit() {
  }

}
