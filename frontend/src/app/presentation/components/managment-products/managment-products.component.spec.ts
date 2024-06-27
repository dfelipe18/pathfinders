import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ManagmentProductsComponent } from './managment-products.component';

describe('ManagmentProductsComponent', () => {
  let component: ManagmentProductsComponent;
  let fixture: ComponentFixture<ManagmentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagmentProductsComponent],
      providers: [provideHttpClient(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
