import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="bg-white">
      <nav class="flex flex-col sm:flex-row">
            <button class="text-gray-600 mr-5 p-1 block hover:text-blue-500 focus:outline-none" 
            *ngFor="let element of elements; let i = index"
            [ngStyle]="{ 
              'color': i == activeElement? activeColor: inactiveColor, 
              'border-bottom': i==activeElement? '2px solid '+activeColor: inactiveColor,
              'font-weight': i==activeElement? '700': '400'
            }"
            [ngClass]="classes"
            (click)="setActiveElement(i)">
                {{ element }}
            </button>
      </nav>
    </div>
  `,
  styleUrls: ['./tabs.component.scss']
})
export default class TabsComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() activeColor?: string = 'rgb(59,130,246)';
  @Input() inactiveColor?: string = "#686263";
  @Input() elements: string[] = ["Tab 1", "Tab 2", "Tab 3"];
  @Input() withBorder = true;
  activeElement = 0;

  setActiveElement(index: number) {
    this.activeElement = index;
  }

  public get classes(): string[] {

    return ['tabs', `tabs--${this.size}`];
  }

}