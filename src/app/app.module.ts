import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ShopService } from './shop/shop.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-bootstrap';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ShopComponent,
    ShopItemComponent
],
  imports: [
    CarouselModule.forRoot(),
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([ { path: '',
    redirectTo: '/shop',
    pathMatch: 'full'
    },
      { path: 'shop', component: ShopComponent, data: {url: "assets/test.location.json"}},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ])
  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true } },
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
