import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = this.cartService.getItems();
  GrandTotal = this.cartService.GrandTotal;

  constructor(private cartService:CartService,private router : Router) { }

  ngOnInit(): void {
    console.log(this.cartService.GrandTotal)
  }

  clearCart(){
    this.products = this.cartService.clearCart();
  }

  DeleteItem(prod:any){
    this.cartService.DeleteItem(prod);
  }

  order(){
    this.router.navigate(['/order']);
    this.products = this.cartService.clearCart();
  }

}
