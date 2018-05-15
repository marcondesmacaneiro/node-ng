import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { CrudComponent } from './crud/crud.component';
import { EditaComponent } from './edita/edita.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  declarations: [CrudComponent, EditaComponent, ListaComponent]
})
export class ProdutosModule { }
