import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor (private productService:ProductService){}

  products!:Product[];

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

}
