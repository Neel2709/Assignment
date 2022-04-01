import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

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

  constructor(private route: ActivatedRoute,private productService:ProductService) {
    this.prod_id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductDoc(this.prod_id!).subscribe((prod:any) => {
      let prods = prod.data();
      this.products={ID:this.prod_id,ProductName:prods.ProductName,ProductDescription:prods.ProductDescription,ProductPrice:prods.ProductPrice,ProductImage:prods.ProductImage};
    })
   }

  ngOnInit(): void {

  }
}
