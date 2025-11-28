import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { TopBar } from './top-bar/top-bar';
import { ProductList } from './product-list/product-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-ecommerce';
}

export const routes = [
  {path: '', component: ProductList}
];
