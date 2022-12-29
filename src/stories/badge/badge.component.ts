import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `<span 
              class="badge" 
              [ngClass]="classes"
              [ngStyle]="{ 'background-color': backgroundColor, 'color': textColor }"
            >{{ label }}</span>`,
  styleUrls: ['./badge.component.scss']
})
export default class BadgeComponent {
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Text';
  @Input() textColor?: string;
  

  public get classes(): string[] {

    return ['badge', `badge--${this.size}`];
  }

}
