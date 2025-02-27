import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingViewComponent } from './shopping-view.component';

describe('ShoppingViewComponent', () => {
  let component: ShoppingViewComponent;
  let fixture: ComponentFixture<ShoppingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
