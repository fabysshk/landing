import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../service/products.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() isCart: boolean = false;
  constructor(
    private cart: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onAddToCart() {
    this.cart.add(this.product);
  }

  // tslint:disable-next-line:typedef
  onRemoveFromCart() {
    this.cart.remove(this.product);
  }

  onChange(item) {
    this.product.additing.find((p) => p.id === item.id).check = !item.check;
    this.productService.update(this.product);
  }
}
