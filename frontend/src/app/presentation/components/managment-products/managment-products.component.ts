import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-managment-products',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './managment-products.component.html',
  styleUrl: './managment-products.component.scss',
})
export class ManagmentProductsComponent implements OnInit {
  currentRoute: string = '';
  titlePage: string = '';

  productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const url = this.document.location.href;
    const baseUrl = this.document.location.origin;
    this.currentRoute = url.substring(baseUrl.length + 1);
    if (this.currentRoute === 'crear-productos') {
      this.onOrganiceCreateView();
    } else {
      this.onOrganiceEditView();
    }
  }

  onOrganiceCreateView(): void {
    this.titlePage = 'Creación de productos';
  }

  onOrganiceEditView(): void {
    this.titlePage = '¡Edita tu producto!';
  }

  updateErrorMessage() {}
}
