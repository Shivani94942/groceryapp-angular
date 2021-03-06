import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _baseUrl="http://apolis-grocery.herokuapp.com/api/";
  private _categoryUrl="category";
  private _subcategoryUrl="subcategory/";
  private _productsUrl = "products/"
  public subId:number;
  public catId:number;

  constructor(private http:HttpClient) { }

  getCatagories():Observable<any> {
    return this.http.get<any>(`${this._baseUrl + this._categoryUrl}`);
  }
  getSubcategory(catId):Observable<any>{
    return this.http.get<any>(`${this._baseUrl+this._subcategoryUrl+catId}`);
  }
  getProducts(subId):Observable<any>{
    return this.http.get<any>(`${this._baseUrl+this._productsUrl+subId}`)
  }
}
