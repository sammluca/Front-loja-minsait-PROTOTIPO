import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Banner } from "./components/banner/banner";
import { ProductList } from "./components/product-list/product-list";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Banner, ProductList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-visual');
}
