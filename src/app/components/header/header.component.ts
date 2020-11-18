import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../../service/cart.service';
import {Product} from '../../service/products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public translate: TranslateService, public cart: CartService) {}

  ngOnInit(): void {
    this.onTranslate();
  }

  onTranslate(): void {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
  public summer(products: Product[]): number{
    return products.reduce((acc, prev) => {
      return acc + (prev.count * prev.price);
    }, 0);
  }
}
