import { Component } from '@angular/core';
import { AppliancesService } from '../../../infrastructure/services/appliances/appliances.service';
import { NgFor, NgIf } from '@angular/common';
import { IResGetAppliances } from '../../../infrastructure/models/appliances.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.onCallAppliances();
  }

  editAppliance(applianceId: string) {
    this.router.navigate(['/editar-productos'], {
      state: { productId: applianceId },
    });
  }

  onCallAppliances(): void {
    this.service.getAppliances().subscribe({
      next: (data: IResGetAppliances[]) => {
        this.dataAppliances = data;
      },
      error: () => {
        this.openSnackBar(
          'No pudimos consultar los productos por el momento.',
          'cerrar'
        );
      },
    });
  }

  onCallDeleteAppliance(applianceId: string): void {
    this.service.deleteAppliance(applianceId).subscribe({
      next: () => {
        this.dataAppliances = this.dataAppliances.filter(
          (appliance) => appliance._id !== applianceId
        );
        this.openSnackBar('Producto eliminado satisfactoriamente.', 'cerrar');
      },
      error: () => {
        this.openSnackBar(
          'No pudimos eliminar el producto por el momento.',
          'cerrar'
        );
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
