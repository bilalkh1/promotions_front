import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `
    <div
      [ngClass]="[
        'text-' + type + '-500',
        hasBackground ? 'bg-' + type + '-100' : 'bg-transparent',
        'px-3',
        'rounded-3xl',
        'w-fit'
      ]"
    >
      <div
        class="inline-block w-2 h-2 rounded-full mr-2"
        [ngClass]="'bg-' + type + '-500'"
        *ngIf="!hasBackground"
      ></div>
      <span>{{ text }}</span>
    </div>
  `,
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  /**
   * What should be the background color?
   */
  @Input()
  hasBackground: boolean = false;

  /**
   * Label type
   */
  @Input()
  type: 'primary' | 'warning' | 'danger' | 'info' | 'success' = 'primary';

  @Input()
  text: string = 'Content';

  constructor() {}
}
