import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public subCategory:any;
  public products:any;
  public catId:any;
  public _image_url="http://rjtmobile.com/grocery/images/";

  constructor(private dataService:DataService,private route:ActivatedRoute) {
    this.catId=this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
      this.dataService.getSubcategory(this.catId).subscribe(x1=>this.subCategory=x1.data)

      this.dataService.getProducts(1).subscribe(x1=>this.products=x1.data)
  }

  onSelectSubCategory(subId){
    console.log(subId);
    this.dataService.getProducts(subId).subscribe(x=>this.products=x.data)
  }
  addToCart(product){
    if(localStorage.cart==undefined)
    {
      var cartItems=[];
      cartItems.push(product);
      localStorage.cart=JSON.stringify(cartItems);
    }
    else{
      var products=JSON.parse(localStorage.cart);
      products.push(product);
      localStorage.cart=JSON.stringify(products);
    }
    
  
  }

}
