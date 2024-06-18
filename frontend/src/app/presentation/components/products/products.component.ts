import { Component, OnInit } from '@angular/core';
import { AppliancesService } from '../../../infrastructure/services/appliances/appliances.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private appliancesService: AppliancesService) {}

  ngOnInit(): void {
    this.appliancesService.getAppliances().subscribe((data) => {
      console.log(data, ' <- Electrodomesticos consultados');
    });
  }
}
