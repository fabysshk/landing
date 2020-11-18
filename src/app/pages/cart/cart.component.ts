import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../service/products.service';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products$: Observable<Product[]>;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.products$ = this.cart.products$;
  }
}
