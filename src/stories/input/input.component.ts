import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="">
            <label
              for="fName"
              *ngIf="withLabel" 
              class="block mb-1 
              text-{{size}} text-[#07074D]"
            >
              {{label}}
            </label>
            <input
              type="{{type}}"
              name="{{name}}"
              id="fName"
              placeholder="{{placeholder}}"
              [ngStyle]="{ 
                'background-color': backgroundColor,
                'color': textColor
              }"
              class="
              {{rounded}} 
              border 
              border-[{{borderColor}}] 
              py-2 px-3 
              w-full
              text-{{size}}
              outline-none 
              focus:border-[#0094ff] 
              focus:shadow-md"
            />
          </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() name: string ='';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() label = 'nothing';
  @Input() withLabel = false;
  @Input() placeholder = 'nothing';
  @Input() backgroundColor = 'white';
  @Input() textColor = 'black';
  @Input() borderColor = '#e0e0e0';
  @Input() focusBorderColor = '#0094ff';
  @Input() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
  @Input() shadow: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
  @Input() rounded: 'rounded-none' | 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full' = 'rounded-md';


}
