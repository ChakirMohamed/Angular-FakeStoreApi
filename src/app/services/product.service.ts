import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = 'https://fakestoreapi.com/';

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(this.url+'products');
  }
}
