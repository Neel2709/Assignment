import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   products : any[] = [];

  constructor() { }

  addToCart(product: any,qty:number=1) {
    if(product == this.products){
      alert("Products Already added in the cart");
    }
    else{
      this.products.push({...product,ProductQuantity:qty});
    }
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}

