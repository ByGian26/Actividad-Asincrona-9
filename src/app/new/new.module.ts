import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EjercicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EjercicioComponent
  ]
})
export class NewModule { }
