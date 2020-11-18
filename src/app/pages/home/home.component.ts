import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider, transformer, fader, stepper} from './route-animations';
import {Product, ProductsService} from '../../service/products.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fader,
    slider,
    transformer,
    stepper
  ]
})
export class HomeComponent implements OnInit {
  public products$: Observable<Product[]>;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.products$;
    this.prepareRoute();
  }
  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet = null) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
