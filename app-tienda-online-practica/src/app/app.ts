import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = "Tenda Online"
}
