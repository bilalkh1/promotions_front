import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button.component';
import { InputComponent } from './input/input.component';
import AvatarComponent from './avatar/avatar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class StoriesModule { }
