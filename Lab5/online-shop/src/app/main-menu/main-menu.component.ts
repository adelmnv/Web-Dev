import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);
  categoryList: {id: number; name: string} [] = [];

  constructor() {
    this.productService.getCategories().then(()=>{
      this.productService.getCategories().then((categories) => {
        this.categoryList = categories;
      });
    })
  }
}
