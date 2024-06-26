import { AfterViewInit, Component, inject } from '@angular/core';
import { AppliancesService } from '../../../infrastructure/services/appliances/appliances.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements AfterViewInit {
  dataAppliances$!: Observable<any[]>;
  
  constructor(private service: AppliancesService) {}

  ngAfterViewInit(): void {
    this.dataAppliances$ = this.service.getAppliances();
  }
}
