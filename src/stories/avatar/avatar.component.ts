import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div class="flex -space-x-1 overflow-hidden">
      <img class="inline-block h-10 w-10 ring-2 ring-white" [ngClass]="classes" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <span *ngIf="withName">{{ name }}</span>
    </div>
  `,
  styleUrls: ['./avatar.component.scss']
})
export default class AvatarComponent {
  @Input() withName = false;
  @Input() circled = true;
  @Input() name = 'nothing';
  @Input() withIcon = true;
  @Input() withText = false;
  @Input() text = 'nothing';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  public get classes(): string[] {
    const circled = this.circled ? 'rounded-full': 'rounded';
    return [circled];
  }

}
