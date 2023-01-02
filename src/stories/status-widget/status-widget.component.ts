import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-widget',
  preserveWhitespaces: false,
  template: `
    <div class="h-31 w-60 bg-primary-100 rounded-xl p-6 text-black">
      <div>
        <p class="text-lg mb-2">{{ title }}</p>
        <div class="flex justify-between items-center">
          <p class="text-2xl font-bold">
            {{ value }}
          </p>
          <span
            [ngClass]="{
              'text-success-500': percentageValue > 0,
              'text-danger-500': percentageValue < 0
            }"
          >
            <span *ngIf="percentageValue > 0">+</span>
            {{ percentageValue }}%
            <i
              class="bi"
              [ngClass]="{
                'bi-graph-up-arrow': percentageValue > 0,
                'bi-graph-down-arrow': percentageValue < 0
              }"
              *ngIf="percentageValue !== 0"
            ></i>
          </span>
        </div>
      </div>
    </div>
  `,
})
export class StatusWidgetComponent {
  @Input()
  title: string = 'Title';

  @Input()
  value?: string | number = undefined;

  @Input()
  percentageValue: number = 11.01;

  constructor() {}
}
