import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/categories';

  // async getAllProducts(): Promise<Product[]> {
  //   const response = await fetch(this.url);
  //   const categories = await response.json();
  //   return categories.flatMap((category: any) => category.products) ?? [];
  // }

  async getProductById(id: number): Promise<Product | undefined> {
    const response = await fetch(this.url);
    const categories = await response.json();
    return categories
      .flatMap((category: any) => category.products)
      .find((product: Product) => product.id === id);
  }

  async getCategories(): Promise<{ id: number; name: string }[]> {
    const response = await fetch(this.url);
    const categories = await response.json();
    return categories.map((category: any) => ({
      id: category.id,
      name: category.name,
    }));
  }

  async getProductsByCategoryId(categoryId: number): Promise<Product[]> {
    const response = await fetch(this.url);
    const categories = await response.json();
    const category = categories.find((cat: any) => cat.id === categoryId);
    const products = category ? category.products : [];
    return products;
  }
}

//json-server --watch db.json
