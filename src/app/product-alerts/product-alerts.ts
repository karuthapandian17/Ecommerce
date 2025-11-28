import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../products';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-alerts',
  imports: [NgIf],
  templateUrl: './product-alerts.html',
  styleUrl: './product-alerts.css',
})
export class ProductAlerts {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
