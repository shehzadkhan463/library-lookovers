import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MultiSelectDropdownComponent
  ],
  exports: [
    CommonModule, MultiSelectDropdownComponent
  ]
})
export class SharedModule { }
