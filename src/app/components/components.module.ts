import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavCartComponent } from './nav-cart/nav-cart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NavCartComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NavCartComponent,
    ProductComponent,
  ],
})
export class ComponentsModule {}

// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
