import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filters = {
    reference: '',
    name: '',
    price: null,
    categoryId: null
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  applyFilters(): void {
    this.loadProducts(); // Vuelve a cargar los productos con los filtros aplicados
  }

  loadProducts(): void {
    this.productService.getProducts(this.filters).subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}


