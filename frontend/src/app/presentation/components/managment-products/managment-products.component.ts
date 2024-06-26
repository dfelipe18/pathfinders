import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormBuilder,
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
    MatButtonModule,
  ],
  templateUrl: './managment-products.component.html',
  styleUrl: './managment-products.component.scss',
})
export class ManagmentProductsComponent implements OnInit {
  currentRoute: string = '';
  titlePage: string = '';

  productForm: FormGroup;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

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

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      console.log('Form not valid');
    }
  }
}