import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;
  currentImageIndex = 0;

  constructor() {
    const productId = Number(this.route.snapshot.params['productId']);
    this.productService.getProductById(productId).then((product) => {
      this.product = product;
    });
  }

  nextImage() {
    if (this.product && this.product.images) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.product.images.length;
    }
  }

  prevImage() {
    if (this.product && this.product.images) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.product.images.length) %
        this.product.images.length;
    }
  }

  shareOnWhatsApp() {
    if (!this.product) return;
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent(
      `Check out this product: ${this.product.name}`
    );
    window.open(`https://wa.me/?text=${message}%20${url}`, '_blank');
  }

  like() {
    if (!this.product) return;
    this.product.likes += 1;
  }
}
