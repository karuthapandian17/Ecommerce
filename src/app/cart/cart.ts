import { Component } from '@angular/core';
import { CartService } from '../cart-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgFor],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  items: any[];

  constructor( private cartservice: CartService){
    
    this.items = this.cartservice.getItems();
  }
}

