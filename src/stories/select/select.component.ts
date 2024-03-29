import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <div>
      <label for="countries" 
      class="block mb-2 font-medium text-gray-900 dark:text-gray-400"
      [ngClass]="classes"
      [ngStyle]="
        {
          'color': labelColor
        }
      "
      >{{label}}</label>
        <select id="countries" 
        class="
        bg-gray-50 border 
        border-gray-300 
        text-gray-900  
        focus:ring-blue-500 
        focus:border-blue-500 block w-full 
        p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500"
        [ngClass]="classes"
        >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        </select>
    </div>
    `,
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
  @Input() labelColor = '#07074D';
  @Input() rounded: 'none' | 'sm' | '' | 'md' | 'lg' | 'xl' = 'md';
  @Input() label = 'Select an option';


  public get classes(): string[]{
    const size = this.size ? `text-${this.size}` : '';
    // const labelColor = this.labelColor ? `text-[${this.labelColor}]` : '';
    const rounded = this.rounded ? `rounded-${this.rounded}` : '';
    return [size, rounded];
  }
}
