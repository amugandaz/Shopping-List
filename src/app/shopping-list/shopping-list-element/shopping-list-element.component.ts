import {Component, inject, Input, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {ShoppingEntry} from '../shopping-entry';
import {NotificationService} from '../notification.service';
import {Subscription} from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-shopping-list-element',
    templateUrl: './shopping-list-element.component.html',
    styleUrls: ['./shopping-list-element.component.css'],
    standalone: true,
    imports: [NgClass]
})
export class ShoppingListElementComponent implements OnInit, OnDestroy {
  @Input() shopping!: ShoppingEntry;
  @Output() fireDelete: EventEmitter<ShoppingEntry> = new EventEmitter();
  shoppings: ShoppingEntry[] = [];
  CurrentShopping: ShoppingEntry | null = null;
  selected = false;
  subscription: Subscription | undefined;
  notificationService= inject(NotificationService);

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newShopping => {
      this.selected = newShopping === this.shopping;
    });
  }

  getProductName(): string {
    return `${this.shopping!.productName}`;
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  delete(): void {
    this.fireDelete.emit(this.shopping);
  }
}