import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.products$.next(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        title: `title-${i}`,
        price: Math.floor(Math.random() * 99),
        count: 0
      }))
    );
  }
}
