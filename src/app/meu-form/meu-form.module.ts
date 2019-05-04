

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [// somente modudos
    CommonModule,
    FormsModule //para uso das diretivas ngModel ngModelChange ...
  ],
  declarations: [//declara componentes
    MeuFormComponent
  ],
  exports:[MeuFormComponent] //expõem para outros modulos 
})

export class MeuFormModule { }
