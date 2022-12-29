import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button.component';
import { InputComponent } from './input/input.component';
import AvatarComponent from './avatar/avatar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';


import BadgeComponent from './badge/badge.component';
import TabsComponent from './tabs/tabs.component';
import NotificationComponent from './notification/notification.component';
import StepperComponent from './stepper/stepper.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    BadgeComponent,
    TabsComponent,
    NotificationComponent,
    StepperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // ButtonComponent
  ]
})
export class StoriesModule { }
