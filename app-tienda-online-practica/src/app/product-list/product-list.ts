import { Component } from '@angular/core';
import { ProductItem } from "./product-item/product-item";

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  title:string = "Listado de productos"
}
