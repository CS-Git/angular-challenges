import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <ng-content />

    <section>
      @for (item of items(); track item.id) {}
    </section>

    <button
      class="rounded-sm border border-blue-500 bg-blue-300 p-2"
      (click)="addNewItem.emit()">
      Add
    </button>
  `,
  host: {
    class: 'flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class CardComponent<T> {
  items = input.required<T>;
  addNewItem = output();
}
