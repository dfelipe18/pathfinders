import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-managment-products',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './managment-products.component.html',
  styleUrl: './managment-products.component.scss',
})
export class ManagmentProductsComponent {
  constructor(@Inject(DOCUMENT) document: any) {
    console.log(document.location.href);
  }
}
