import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryId = Number(params['categoryId']);
      
      this.productService.getProductsByCategoryId(categoryId).then((products: Product[]) => {
        this.productList = products;
      });
    });
  }

  deleteProduct(productId: number) {
    this.productList = this.productList.filter(product => product.id !== productId);
  }
}
