import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public subCategory:any;
  public _image_url="http://rjtmobile.com/grocery/images/";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
      this.dataService.getSubcategory(2).subscribe(x1=>this.subCategory=x1.data)
  }

}
