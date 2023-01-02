import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button.component';
import { InputComponent } from './input/input.component';
import AvatarComponent from './avatar/avatar.component';

import { LabelComponent } from './label/label.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';

import BadgeComponent from './badge/badge.component';
import TabsComponent from './tabs/tabs.component';
import NotificationComponent from './notification/notification.component';
import StepperComponent from './stepper/stepper.component';
import { FeaturedIconComponent } from './featured-icon/featured-icon.component';
import { StatusWidgetComponent } from './status-widget/status-widget.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    LabelComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    BadgeComponent,
    TabsComponent,
    NotificationComponent,
    StepperComponent,
    FeaturedIconComponent,
    StatusWidgetComponent,
  ],
  imports: [CommonModule],
  exports: [
    // ButtonComponent
    LabelComponent,
  ],
})
export class StoriesModule {}
