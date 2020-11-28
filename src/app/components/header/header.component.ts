import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../../service/cart.service';
import { Product } from '../../service/products.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isAuth$: Observable<boolean>;

  constructor(
    public translate: TranslateService,
    public cart: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.onTranslate();
    this.onAuth();
  }

  private onAuth(): void{
    this.isAuth$ = this.authService.isAuth$;
  }

  public onLogOut(): void{
    this.authService.logout();
  }

  onTranslate(): void {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
  public summer(products: Product[]): number {
    return products.reduce((acc, prev) => {
      const sumPrice = acc + prev.count * prev.price;
      const sumAdding = prev.additing.reduce((a, p) => {
        return a + (p.check ? p.price : 0);
      }, 0);
      return sumPrice + sumAdding;
    }, 0);
  }
}
