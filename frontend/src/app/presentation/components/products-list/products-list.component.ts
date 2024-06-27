import { Component } from '@angular/core';
import { AppliancesService } from '../../../infrastructure/services/appliances/appliances.service';
import { NgFor, NgIf } from '@angular/common';
import { IResGetAppliances } from '../../../infrastructure/models/appliances.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule, MatCardModule, MatDividerModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  dataAppliances!: IResGetAppliances[];

  constructor(
    private service: AppliancesService,
    private router: Router) {
    this.onCallAppliances();
  }

  editAppliance(applianceId: string) {
    this.router.navigate(['/edit-appliance', { queryParams: { productId: applianceId } }]);
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

  onCallDeleteAppliance(applianceId: string): void {
    this.service.deleteAppliance(applianceId).subscribe({
      next: () => {
        console.log('Electrodomestico eliminado correctamente');
        //Aca deberia de ir una forma de refrescar
      },
      error: err => {
        console.log('Error eliminando el electrodomestico' + err)
      }
    })
  }
}
