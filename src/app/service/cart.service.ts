import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Product, ProductsService} from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public showCart$ = new BehaviorSubject<boolean>(true);
  public products$ = new BehaviorSubject<Product[]>([]);
  constructor(
    private productsService: ProductsService
  ) {}

  // tslint:disable-next-line:typedef
  toggleCart() {
    const isShow = this.showCart$.value;
    this.showCart$.next(!isShow);
  }

  // tslint:disable-next-line:typedef
  updateCart(product: Product, products: Product[]){
    this.products$.next(
      [...products].map(p => p.id === product.id ? product : p)
    );
  }

  removeFromCart(product: Product, products: Product[]): void {
    this.products$.next(
      [...products].filter(p => p.id !== product.id)
    );
  }

  add(product: Product): void{
    const products = this.products$.value;
    const productInCart = products.find(p => p.id === product.id);
    if (productInCart){
      productInCart.count += 1;
      this.updateCart(productInCart, products);
    }else {
      product.count = 1;
      this.products$.next([...products, product]);
    }

  }
  remove(product: Product): void{
    const products = this.products$.value;
    const productInCart = products.find(p => p.id === product.id);
    if (productInCart){
      if (productInCart.count <= 1){
        productInCart.count = 0;
        this.removeFromCart(productInCart, products);
      }else{
        productInCart.count -= 1;
        this.updateCart(productInCart, products);
      }
    }
  }

}
