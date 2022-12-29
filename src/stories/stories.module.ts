import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button.component';
import AvatarComponent from './avatar/avatar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class StoriesModule { }
