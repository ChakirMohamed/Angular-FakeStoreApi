import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = 'https://fakestoreapi.com/';

  constructor() { }
}
