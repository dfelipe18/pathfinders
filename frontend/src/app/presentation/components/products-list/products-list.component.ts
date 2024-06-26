import { Component } from '@angular/core';
import { AppliancesService } from '../../../infrastructure/services/appliances/appliances.service';
import { NgFor, NgIf } from '@angular/common';
import { IResGetAppliances } from '../../../infrastructure/models/appliances.model';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  dataAppliances!: IResGetAppliances[];

  constructor(private service: AppliancesService) {
    this.onCallAppliances();
  }

  onCallAppliances(): void {
    this.service.getAppliances().subscribe({
      next: (data: IResGetAppliances[]) => {
        this.dataAppliances = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
