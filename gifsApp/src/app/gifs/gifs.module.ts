import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GifsModule { }
