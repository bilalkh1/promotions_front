import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  template: `
  <!-- component -->
  <div class="p-5">
    <div class="mx-4 p-4">
        <div class="flex items-center">
            <ng-container *ngFor="let item of steps; let i=index">
              <div class="flex items-center relative rounded-full cursor-pointer text-teal-600" (click)="onChangeStep(i)" [ngClass]="{'bg-teal-600 text-white-600': item.completed && activeElement!=i}">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 step-number" [ngClass]="{'text-teal-600': !item.completed && activeElement!=i, 'text-teal-600': activeElement==i, 'border-teal-600': activeElement==i || item.completed, 'text-gray-300': activeElement!=i && !item.completed, 'text-white': item.completed && activeElement!=i}">
                      {{i+1}}
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase"  [ngClass]="{'text-teal-600': !item.completed && activeElement!=i, 'text-teal-600': activeElement==i || item.completed, 'text-gray-300': activeElement!=i && !item.completed}">{{ item.title }}</div>
              </div>
              <div class="flex-auto border-t-2 transition duration-500 ease-in-out" [ngClass]="{'border-teal-600': item.completed, 'border-gray-300': !item.completed}" *ngIf="i!=steps.length-1"></div>
            </ng-container>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./stepper.component.scss']
})
export default class StepperComponent {
  @Input() steps: {title: string, completed: boolean}[] = [
    {title: 'Step 1', completed: true},
    {title: 'Step 2', completed: true},
    {title: 'Step 3', completed: false}
  ];
  activeElement = 0;
  @Input() icon!: string;


  onChangeStep(i: number) {
    console.log(i);
    this.activeElement = i;
  }

}