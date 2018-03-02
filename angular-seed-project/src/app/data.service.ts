import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getProducts() {
    return this._http.get("http://localhost:3000/api/product/getProducts")
      .map(result => this.result = result.json().data);
  }

  postProducts(product){
    return  this._http.post("http://localhost:3000/api/product/createProduct",product);
  }

  patchProducts(product){
    return this._http.patch("http://localhost:3000/api/product/updateProduct/"+product._id, product);
  }

  deleteProducts(product){
    console.log("Product deleted");
    return this._http.delete("http://localhost:3000/api/product/deleteProduct/"+product._id, product)
      .map(res => res.json());
    
  }
}
