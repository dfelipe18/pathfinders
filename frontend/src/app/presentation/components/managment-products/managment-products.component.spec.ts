import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ManagmentProductsComponent } from './managment-products.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';

describe('ManagmentProductsComponent', () => {
  let component: ManagmentProductsComponent;
  let fixture: ComponentFixture<ManagmentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagmentProductsComponent],
      providers: [provideHttpClient(), provideNoopAnimations(), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
