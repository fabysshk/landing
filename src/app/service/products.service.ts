import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Additing {
  id: number;
  title: string;
  price: number;
  check?: boolean;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
  additing?: Additing[];
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products$ = new BehaviorSubject<Product[]>([]);
  update(product) {
    // console.log(product);
  }
  constructor() {
    this.products$.next(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        title: `title-${i}`,
        price: Math.floor(Math.random() * 99),
        count: 0,
        additing: [
          {
            id: Math.floor(Math.random() * 99999999),
            title: 'one',
            price: Math.floor(Math.random() * 5),
            check: true,
          },
          {
            id: Math.floor(Math.random() * 99999999),
            title: 'two',
            price: Math.floor(Math.random() * 40),
            check: false,
          },
          {
            id: Math.floor(Math.random() * 99999999),
            title: 'three',
            price: Math.floor(Math.random() * 10),
            check: false,
          },
        ],
      }))
    );
  }
}
