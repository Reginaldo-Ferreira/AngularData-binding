import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  valor: number = 5;


  mudarValor(){
    //se mudar o input property o ngOnChanges é disparado na munça
    //se não tiver input property usa-se ngOnInit
    this.valor++;
  }


}
