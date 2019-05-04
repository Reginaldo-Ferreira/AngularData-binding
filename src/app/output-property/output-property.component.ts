import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  
  @Input() valor: number = 0;//o propety binding ja atualiza o componente html

  @Output() mudouValor = new EventEmitter();//para expor o evento para outro component
  
  //@ViewChild('campoInput') campoValueInput: HTMLElement;// coloquei HTMLElement para ver browser o tipo de elemento porque se não 'nativeElement' não funcionará
  @ViewChild('campoInput') campoValueInput: ElementRef;

  incrementa(){
    //this.campoValueInput.nativeElement.value++;//poderia fazer o encrement direto no input
    console.log("[output] o valor do elem- "+this.campoValueInput.nativeElement.value)
    this.valor++;
    this.mudouValor.emit({mudouValor: this.valor});// ****'mudouValor'*** e o obejto que irá aparece para o outro template
  }

  decrementa(){
    
    this.valor--;
    this.mudouValor.emit({mudouValor: this.valor});
    this.mudouValor.emit({novoValor: this.campoValueInput.nativeElement.value});
  }
  constructor() { }

  ngOnInit() {
  }

}
