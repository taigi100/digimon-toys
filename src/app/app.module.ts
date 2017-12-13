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
    redirectTo: '/featured',
    pathMatch: 'full'
    },
      { path: 'featured', component: ShopComponent, data: {url: "assets/action_figures.json"}},
      { path: 'action-figures', component: ShopComponent, data: {url: "assets/action_figures.json"}},
      { path: 'plush-toys', component: ShopComponent, data: {url: "assets/action_figures.json"}},
      { path: 'accessories', component: ShopComponent, data: {url: "assets/action_figures.json"}},
      { path: 'dvds', component: ShopComponent, data: {url: "assets/action_figures.json"}}
    ])
  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true } },
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
