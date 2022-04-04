import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  public prod_id:any="";
  products: any;
  ProductName:string="";
  ProductDescription:string="";
  ProductPrice:string="";
  ProductImage:string = "";
  ProductQuantity : number = 1;

  constructor(private route: ActivatedRoute,private productService:ProductService,private cartService:CartService) {
    this.prod_id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductDoc(this.prod_id!).subscribe((prod:any) => {
      let prods = prod.data();
      this.products={ID:this.prod_id,ProductName:prods.ProductName,ProductDescription:prods.ProductDescription,ProductPrice:prods.ProductPrice,ProductImage:prods.ProductImage};
    })
   }

  ngOnInit(): void {

  }

  Increase(){
    this.ProductQuantity+=1;
  }

  Decrease(){
    if(this.ProductQuantity>1){
      this.ProductQuantity-=1;
    }
  }

  addToCart(product:any,qty:number=1){
    this.cartService.addToCart(product,qty);
  }
}
