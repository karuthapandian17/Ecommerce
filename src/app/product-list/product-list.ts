import { Component } from '@angular/core';
import { products } from '../../products';
import { NgFor, NgIf } from '@angular/common';
import { ProductAlerts } from "../product-alerts/product-alerts";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, ProductAlerts, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products=[...products]

  share() {
  window.alert('The product has been shared!');
}
  onNotify() {
    window.alert('You have been notified once the products in stock');
  }
}
