import  { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   products : any[] = [];
   GrandTotal : number = 0 ;

  constructor() { }

  addToCart(product: any,qty:number=1) {
    let flag:boolean = false;
    this.products.forEach((item,i) => {
      if(item.id===product.id){
        flag=true;
        this.products[i].ProductQuantity+=qty;
        this.GrandTotal += product.ProductPrice * qty;
      }
    });
    if(flag==false){
      this.products.push({...product,ProductQuantity:qty});
      this.GrandTotal += product.ProductPrice * qty;
      window.alert("Product added in cart successfully....");
    }
    return this.products;
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    this.GrandTotal=0;
    return this.products;
  }

  DeleteItem(prod:any){

    let index : number = -2;
    this.products.forEach((item,i) => {
      if(item.id == prod.id){
        index = i ;
      }
    });
    this.products.splice(index,1);
    alert("Product removed successfully..");
  }

}

