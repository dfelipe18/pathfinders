import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppliancesService } from '../../../infrastructure/services/appliances/appliances.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IResGetAppliances } from '../../../infrastructure/models/appliances.model';
import { Subscription } from 'rxjs';

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
export class ManagmentProductsComponent implements OnInit, OnDestroy {
  currentRoute: string = '';
  titlePage: string = '';
  productId: string = '';
  titleButton: string = 'Agregar';
  dataAppliances!: IResGetAppliances[];
  productForm: FormGroup;
  subscription: Subscription[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private service: AppliancesService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });

    const activeRoute = this.activatedRoute.paramMap.subscribe({
      next: () => {
        if (window.history.state) {
          this.productId = window.history.state.productId;
        }
      },
    });

    this.subscription.push(activeRoute);
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

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  onOrganiceCreateView(): void {
    this.titlePage = 'Creación de productos';
    this.titleButton = 'Agregar';
  }

  onOrganiceEditView(): void {
    this.titlePage = '¡Edita tu producto!';
    this.titleButton = 'Modificar';

    const service = this.service
      .getConsultedProducts()
      .subscribe((appliances) => {
        this.dataAppliances = appliances;
        const appliance = this.dataAppliances.find(
          (appliance) => appliance._id === this.productId
        );

        if (appliance) {
          this.productForm.setValue({
            name: appliance.name,
            brand: appliance.brand,
            description: appliance.description,
            price: appliance.price,
            quantity: appliance.quantity,
          });
        }
      });

    this.subscription.push(service);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  onSubmit() {
    if (this.productForm.valid && this.currentRoute === 'crear-productos') {
      this.onCreatetProduct();
    } else if (
      this.productForm.valid &&
      this.currentRoute === 'editar-productos'
    ) {
      this.onEditProduct();
    }
  }

  onCreatetProduct(): void {
    const service = this.service
      .setAppliance(this.productForm.value)
      .subscribe({
        next: () => {
          this.openSnackBar('¡Producto creado satisfactoriamente!', 'cerrar');
          this.onResetForm();
        },
        error: (err: Error) => {
          this.openSnackBar(
            'Lamentablemente no pudimos crear el producto',
            'cerrar'
          );
        },
      });
    this.subscription.push(service);
  }

  onEditProduct(): void {
    const service = this.service
      .modifyAppliance(this.productForm.value, this.productId)
      .subscribe({
        next: () => {
          this.openSnackBar(
            '¡Producto modificado satisfactoriamente!',
            'cerrar'
          );
          this.onResetForm();
        },
        error: (err: Error) => {
          this.openSnackBar(
            'Lamentablemente no pudimos modificar el producto',
            'cerrar'
          );
        },
      });
    this.subscription.push(service);
  }

  onResetForm(): void {
    this.productForm.reset();
  }

  onCancelForm(): void {
    this.route.navigate(['/inicio']);
  }
}
