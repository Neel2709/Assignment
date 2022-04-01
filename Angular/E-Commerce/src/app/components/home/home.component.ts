import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;
  products: any;
  ProductName : string="";
  ProductPrice : string="";
  ProductImage : string="";
  ProductDescription : string="";

  constructor(private authService:AuthenticationService,private productService:ProductService,private router:Router, private cartService:CartService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProduct();
    // console.log(this.products);
    this.productService.getProduct().subscribe(data => {
      this.products = data.map((e:any) => {
        return{
          id:e.payload.doc.id,
          ProductName:e.payload.doc.data()['ProductName'],
          ProductPrice:e.payload.doc.data()['ProductPrice'],
          ProductDescription:e.payload.doc.data()['ProductDescription'],
          ProductImage:e.payload.doc.data()['ProductImage'],
        };
      })
    })
  }

  description(prod:any){
    this.router.navigate(['/product_display/'+prod]);
  }

  addToCart(product:any){
    this.cartService.addToCart(product);
    window.alert("Product has been added to the cart successfully...");
  }

}
