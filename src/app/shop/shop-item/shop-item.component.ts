import { ShopItem } from './../../domain/shop-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  template: `
    <div *ngIf="item">
      <img src="item?.image">
      <span> price {{item?.price}} </span>
      <a href="item?.linkToBuy"><button>Buy now!</button></a>
    </div>
  `,
  styles: []
})
export class ShopItemComponent implements OnInit {
  @Input() item: ShopItem;

  ngOnInit() {
    
  }
}
