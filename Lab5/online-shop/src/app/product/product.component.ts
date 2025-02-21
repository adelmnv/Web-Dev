import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from "@angular/common";
import { Product } from '../product';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  shareOnWhatsApp() {
    if (!this.product) return;
    let url = encodeURIComponent(window.location.href);
    url += "details/"+this.product.id;
    const message = encodeURIComponent(
      `Check out this product: ${this.product.name}`
    );
    window.open(`https://wa.me/?text=${message}%20${url}`, '_blank');
  }

  like(){
    if (!this.product) return;
    this.product.likes+=1;
  }
  removeProduct() {
    if (!this.product) return;
    this.deleteProduct.emit(this.product.id);
  }
}
