import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../../service/products.service';
@Component({
  selector: 'app-nav-cart',
  templateUrl: './nav-cart.component.html',
  styleUrls: ['./nav-cart.component.css'],
})
export class NavCartComponent implements OnInit {
  public isShow = false;
  public products$: Observable<Product[]>;
  constructor(public translate: TranslateService, public cart: CartService) {}

  ngOnInit(): void {
    this.cart.showCart$.subscribe((x) => (this.isShow = x));
    this.products$ = this.cart.products$;
  }
  public summer(products: Product[]): number {
    return products.reduce((acc, prev) => {
      const sumPrice = acc + prev.count * prev.price;
      const sumAdding = prev.additing.reduce((a, p) => {
        return a + (p.check ? p.price : 0);
      }, 0);
      const sumAll = sumPrice + sumAdding;
      return sumAll;
    }, 0);
  }
}
