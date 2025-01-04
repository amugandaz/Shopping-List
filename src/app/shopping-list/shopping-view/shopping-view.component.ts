import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {ShoppingEntry} from '../shopping-entry';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-shopping-view',
    templateUrl: './shopping-view.component.html',
    styleUrls: ['./shopping-view.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class ShoppingViewComponent implements OnInit {
  @Input() shopping!: ShoppingEntry;
  @Output() fireDelete: EventEmitter<ShoppingEntry> = new EventEmitter();
  edit: boolean | undefined;

  ngOnInit(): void {
    this.edit = true;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.shopping);
  }
}
