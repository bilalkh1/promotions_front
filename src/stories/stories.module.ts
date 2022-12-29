import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button.component';
import AvatarComponent from './avatar/avatar.component';

import { LabelComponent } from './label/label.component';
import BadgeComponent from './badge/badge.component';
import TabsComponent from './tabs/tabs.component';
import NotificationComponent from './notification/notification.component';
import StepperComponent from './stepper/stepper.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    LabelComponent,
    BadgeComponent,
    TabsComponent,
    NotificationComponent,
    StepperComponent,
  ],
  imports: [CommonModule],
  exports: [
    // ButtonComponent
    LabelComponent,
  ],
})
export class StoriesModule {}
