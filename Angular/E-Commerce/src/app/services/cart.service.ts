import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   products : any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.products.push(product);
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}
