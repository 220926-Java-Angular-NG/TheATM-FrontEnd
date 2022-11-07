import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingMallComponent } from './shopping-mall.component';

describe('ShoppingMallComponent', () => {
  let component: ShoppingMallComponent;
  let fixture: ComponentFixture<ShoppingMallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingMallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
