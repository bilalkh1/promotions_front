import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `
  <div class="flex items-center" *ngIf="type != 'toggle'">
            <input
              type="{{type}}"
              name="{{name}}"
              id="radioButton1"
              class="h-5 w-5"
            />
            <label
              for="radioButton1"
              class="pl-3 font-medium"
              [ngClass]="classes"
              *ngIf="withLabel"
            >
              {{label}}
            </label>
  </div>
  <div class="" *ngIf="type === 'toggle'">
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input 
          type="checkbox" 
          name="{{name}}" 
          id="toggle" 
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
        <label 
          for="toggle" 
          class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
      <label for="toggle"  [ngClass]="classes">{{label}}</label>
    </div>
          `,
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() name: string = '';
  @Input() label = 'nothing';
  @Input() withLabel = false;
  @Input() type: 'checkbox' | 'radio' | 'toggle' = 'checkbox';
  @Input() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
  @Input() labelColor = '#07074D';
  // text-gray-700

  public get classes(): string[]{
    const size = this.size ? `text-${this.size}` : '';
    const labelColor = this.labelColor ? `text-[${this.labelColor}]` : '';
    return [size, labelColor];
  }
}
