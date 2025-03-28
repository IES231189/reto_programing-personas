import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas/personas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonasComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [PersonasComponent]
})
export class PersonaModule { }
