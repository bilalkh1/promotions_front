import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-icon',
  template: `
    <div
      class="
    w-10
    h-10
    rounded-full
    flex
    items-center
    justify-center
    relative
    top-[-25%]
    right-[-90%]
    text-black
  "
      [ngClass]="['bg-' + background + '-100']"
    >
      <i [ngClass]="['bi', 'bi-' + iconName]"></i>
    </div>
  `,
  styleUrls: [],
})
export class FeaturedIconComponent {
  @Input()
  iconName: string = 'person';

  @Input()
  background: 'primary' | 'warning' | 'danger' | 'info' | 'success' = 'primary';

  constructor() {}
}
