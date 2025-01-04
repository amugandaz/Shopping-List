import {Component, OnInit, Output, EventEmitter, inject} from '@angular/core';
import {ShoppingEntry} from './shopping-entry';
import {NotificationService} from './notification.service';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { ShoppingListElementComponent } from './shopping-list-element/shopping-list-element.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: [NotificationService],
    standalone: true,
    imports: [NgIf, NgFor, ShoppingListElementComponent, ShoppingViewComponent],
})
export class ShoppingListComponent implements OnInit {

  @Output() fireDelete: EventEmitter<ShoppingEntry> = new EventEmitter();
  shoppings: ShoppingEntry[] = [];
  currentShopping: ShoppingEntry | null = null;
  shopping!: ShoppingEntry | undefined;
  notificationService: NotificationService = inject(NotificationService);

  ngOnInit(): void {
    this.notificationService.selectedElement.subscribe(newShopping => {
      this.currentShopping = newShopping;
    });
  }

  select(shopping: ShoppingEntry): void {
    this.currentShopping = shopping;
    this.notificationService.selectionChanged(shopping);
  }

  addShopping(): void {
    const newShopping = new ShoppingEntry('');
    this.shoppings = [newShopping, ...this.shoppings];
    this.select(newShopping);
  }

 deleteCurrent(): void {
    this.shoppings = this.shoppings.filter((shopping: ShoppingEntry) => shopping !== this.currentShopping);
    this.currentShopping = null;
  }

  delete(): void {
    this.fireDelete.emit(this.shopping);
  }
}