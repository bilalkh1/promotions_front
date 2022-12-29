import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button.component';
import AvatarComponent from './avatar/avatar.component';
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    LabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class StoriesModule { }
