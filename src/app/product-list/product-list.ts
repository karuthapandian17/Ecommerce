import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, products } from '../../products';
import { NgFor, NgIf } from '@angular/common';
import { ProductAlerts } from "../product-alerts/product-alerts";
import { RouterLink } from "@angular/router";
import { AppService } from '../app-service';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, ProductAlerts, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(private appService: AppService){}
  
  ngOnInit(): void {
    this.appService.getUsers().subscribe((data) =>{

      console.log(data,"data")

      // this.products = data
    })
  }

  

  share() {
  window.alert('The product has been shared!');
}
  onNotify() {
    window.alert('You have been notified once the products in stock');
  }
}
