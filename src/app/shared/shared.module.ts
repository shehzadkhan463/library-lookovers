import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, 
  ],
  declarations: [
    MultiSelectDropdownComponent
  ],
  exports: [
    MultiSelectDropdownComponent,ReactiveFormsModule, 
  ]
})
export class SharedModule { }
