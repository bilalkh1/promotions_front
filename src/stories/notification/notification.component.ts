import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="flex justify-start items-center notification" [ngClass]="classes" [ngStyle]="{'background-color': backgroundColor}">
      <i class="bi mr-3" [ngClass]="iconClasses"></i>
      <span [ngStyle]="{'color': textColor}">{{ label }}</span>
    </div>
  `,
  styleUrls: ['./notification.component.scss']
})
export default class NotificationComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() status: 'success' | 'warning' | 'error' = 'success';
  @Input() label = "Successful Operation";
  @Input() backgroundColor?: string;
  @Input() textColor?: string;

  public get classes(): string[] {
    return ['notification', `notification--${this.size}`];
  }
  
  public get iconClasses(): string[] {
    let classes = [];
    switch (this.status) {
      case 'success':
        classes.push('bi-check2');
        break;
      case 'warning':
        classes.push('bi-exclamation-triangle');
        break;
      case 'error':
        classes.push('bi-x');
        break;
      default:
        classes.push('bi-check2');
        break;
    }
    return [...classes, `icon--${this.status}`];
  }
}
