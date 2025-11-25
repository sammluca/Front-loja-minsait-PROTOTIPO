import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  imports: [DecimalPipe]
})
export class ProductCard {
  @Input() produto: any;
}
